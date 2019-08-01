
from collections import namedtuple
from docplex.mp.model import Model
import pandas as pd
import math

#
# Data import and data preparation --------------------------------
#
# Lists the markets.
markets_df = inputs["Markets"]
markets = markets_df["Id"].tolist()

# Lists the months of the planning horizon.
months_df = inputs["Months"]
months = months_df["Id"].tolist()
next_month = {months[m]: months[m+1] for m in range(len(months) - 1)}

# The Parameters
#parameters_df = inputs["parameters"]
#parameters = [r for r in parameters_df.itertuples(index=False)][0]
#parameters = { 'nbMonthsPlanned' : 3};
nbMonthsPlanned = 3;

# Lists the plants
plants_df = inputs["Plants"]
plants = plants_df["Id"].tolist()

# Lists the products
products_df = inputs["Products"]
products = products_df["Id"].tolist()

# Provides the projected marginal profit for a product, market and month.
marginalProfits_df = inputs["MarginalProfit"]
# Provides the capacities of a plant over the months.(see tuple "TPlantMonthCapacity")
plantMonthCapacities_df = inputs["PlantMonthCapacity"]
# Provides the product specific capacities of a plant.(see tuple "TPlantProductCapacity")
plantProductCapacities_df = inputs["PlantProductCapacity"]

# Indicates the production cost of a product at a given plant.
plantProductCosts_df = inputs["PlantProductCost"]

# Lists the sales requirements.
sales_df = inputs["FirmSales"]

# Gives the demand of a product for the given market and month.
demands_df = inputs["Demand"]
demands_df = pd.pivot_table(demands_df, index=["Products", "Markets", "Months"], values=["value"])
prodMarketMonthMultiIndex = demands_df.index

demands = demands_df.to_dict()['value']


# Indicates the initial inventory of a product for a given market.
# This is mapped as an array so that we will get the default value of 0 when
#  the data is not specifie in the table.
#  - dimension #1: the product
#  - dimension #2: the market
#  - value: the initial inventory or 0 if not defined.
initialInventories_df = inputs["InitialInventory"]
initialInventories_df = pd.pivot_table(initialInventories_df, index=["Products", "Markets"], values=["value"])
prodMarketMultiIndex = initialInventories_df.index
initialInventories = initialInventories_df.to_dict()['value']


# Create MP Model
mdl = Model("SupplyDemand")

# Provides the projected production of a product and a month at plants.
plantProdMonthDataPoint = namedtuple("plantProdMonthDataPoint", ["plant", "product", "month"])
plantProdMonthMultiIndex = pd.MultiIndex.from_tuples([(plants[pl], products[p], months[mo])
                                                      for pl in range(len(plants))for p in range(len(products))
                                                      for mo in range(len(months))],
                                                     names=list(plantProdMonthDataPoint._fields))
Production_df = pd.DataFrame(mdl.integer_var_list(plantProdMonthMultiIndex.values.tolist(), lb=0, name="Production"),
                             index=plantProdMonthMultiIndex, columns=['Production']).sortlevel()
Production = Production_df.to_dict()['Production']
Production_df = Production_df.reset_index()

# Provides the projected inventory level of a product for the given market and month
Inventory_df = pd.DataFrame(mdl.integer_var_list(prodMarketMonthMultiIndex.values.tolist(), lb=0, name="Inventory"),
                            index=prodMarketMonthMultiIndex, columns=['Inventory']).sortlevel()
Inventory = Inventory_df.to_dict()['Inventory']
Inventory_df = Inventory_df.reset_index()

# Provides the projected executed sales of a product for the given marlet and month
ExecutedSales_df = pd.DataFrame(mdl.integer_var_list(prodMarketMonthMultiIndex.values.tolist(), lb=0, name="ExecutedSales"),
                            index=prodMarketMonthMultiIndex, columns=['ExecutedSales']).sortlevel()
ExecutedSales = ExecutedSales_df.to_dict()['ExecutedSales']
ExecutedSales_df = ExecutedSales_df.reset_index()

# Provides the projected allocation of a product for the given market and month.
Allocation_df = pd.DataFrame(mdl.integer_var_list(prodMarketMonthMultiIndex.values.tolist(), lb=0, name="Allocation"),
                            index=prodMarketMonthMultiIndex, columns=['Allocation']).sortlevel()
Allocation = Allocation_df.to_dict()['Allocation']
Allocation_df = Allocation_df.reset_index()

# Define the planning horizon by restricting the number of months
firstMonth = months[0]
horizon = [m for m in months[0:nbMonthsPlanned]]
inventoryHorizon = {m for m in months[0:nbMonthsPlanned]}

# Goals
deviation = mdl.sumsq((Allocation[pr, ma, mo] - float(demands[pr, ma, mo]))
                      for ma in markets for pr in products for mo in horizon)

productionCost = mdl.sum(Production[c.Plants, c.Products, mo] * c.value
                         for c in plantProductCosts_df.itertuples(index=False) for mo in horizon)

marginalProfit = mdl.sum(ExecutedSales[pro, mark, mo] * val
                         for (pro, mark, mo, val) in marginalProfits_df[marginalProfits_df['Months'].isin(horizon)].
                         itertuples(index=False))

mdl.add_kpi(deviation, "deviation")
mdl.add_kpi(productionCost, "productionCost")
mdl.add_kpi(marginalProfit, "marginalProfit")

mdl.minimize(deviation + productionCost - marginalProfit)

#
# Constraints definition ---------------------------------------------------
#
# Inventory at the beginning of the first month
mdl.add_constraints(Inventory[pr, ma, firstMonth] == initialInventories[pr, ma] for pr in products for ma in markets)

# Plants (at each month) cannot produce more than their global capacity.
for pmc in plantMonthCapacities_df[plantMonthCapacities_df["Months"].isin(horizon)].itertuples(index=False):
    mdl.add_constraint(mdl.sum(Production[pmc.Plants, pr, pmc.Months] for pr in products) <= pmc.value)


# Plants (for each product and month) cannot produce more than their global capacity.
mdl.add_constraints(Production[ppc.Plants, ppc.Products, mo] <= ppc.value
                    for ppc in plantProductCapacities_df.itertuples(index=False)
                    for mo in horizon)

# Plants with no limits cannot produce this product
pdc_entries = pd.pivot_table(plantProductCapacities_df, index=["Plants", "Products"], values=["value"]).to_dict()['value']
mdl.add_constraints(Production[pl, pr, mo] == 0 for pl in plants for pr in products if pdc_entries.get((pl, pr)) is None
                    for mo in horizon)

# Production equals Allocation
mdl.add_constraints(
    mdl.sum(Allocation[pr, ma, mo] for ma in markets) == mdl.sum(Production[pl, pr, mo] for pl in plants)
    for mo in horizon for pr in products)

# Executed Sales are at least the firm sales
mdl.add_constraints(
    ExecutedSales[s.Products, s.Markets, s.Months] >= s.value
    for s in sales_df[(sales_df['value'] > 0) & (sales_df['Months'].isin(horizon))].itertuples(index=False))

# Executed Sales are at most the planned demand
mdl.add_constraints(ExecutedSales[pr, ma, mo] <= demands[pr, ma, mo]
                    for pr in products for ma in markets for mo in horizon)

# Product Conservation - assumes inventory doesn't move between markets
for pr in products:
    for ma in markets:
        for mo in horizon:
            mdl.add_constraint(
                # what was available in inventory at the beginning of the month
                Inventory[pr, ma, mo]
                # what is allocated to this market this month
                + Allocation[pr, ma, mo]
                ==
                # what is sold during this month
                ExecutedSales[pr, ma, mo]
                # what will stay in inventory at the end of the month
                + Inventory[pr, ma, next_month[mo]]
            )

mdl.set_time_limit(10)
mdl.solve(log_output=False)

#
# Output --------------------------------------------------------------------
#
# Provides more details about the projected allocation of a product to a market.
#  - field allocation: the allocation in unit of product
TDemandAllocationResult = namedtuple("TDemandAllocationResult",
                                     ["product", "market", "month", "demand", "allocation", "absdiff", "reldiff"])

# Provides more details about the projected production and comparison to capacity.
TProductionResult = namedtuple("TProductionResult",
                               ["plant", "product", "month", "capacity", "production", "absdiff", "reldiff"])

# Provides KPI details
TKpiResult = namedtuple("TKpiResult", ["deviation", "productionCost", "marginalProfit"])

# Build result tables
# DEMAND_ALLOCATION_RESULTS
demandAllocationResults = []
for pr in products:
    for ma in markets:
        for mo in horizon:
            d = demands[pr, ma, mo]
            alloc = Allocation[pr, ma, mo].solution_value
            dar = TDemandAllocationResult(pr, ma, mo, d,
                                         int(alloc), int(math.fabs(d - alloc)),
                                         100 if alloc == 0 else 100 * math.fabs(d - alloc) / (1 + d))
            demandAllocationResults.append(dar)

demandAllocationResults_df = pd.DataFrame(demandAllocationResults, columns=list(TDemandAllocationResult._fields))

# PRODUCTION_RESULTS
productionResults = []
for ppc in plantProductCapacities_df.itertuples(index=False):
    for mo in horizon:
        prod = Production[ppc.Plants, ppc.Products, mo].solution_value
        productionResults.append(TProductionResult(ppc.Plants,ppc.Products, mo, ppc.value,
                                                   int(prod),
                                                   int(math.fabs(ppc.value - prod)),
                                                   100 * math.fabs(ppc.value - prod) / (1 + ppc.value)))
productionResults_df = pd.DataFrame(productionResults, columns=list(TProductionResult._fields))

# KPI results
kpiResults = [TKpiResult(mdl.kpi_by_name("deviation").compute(),
                         mdl.kpi_by_name("productionCost").compute(),
                         mdl.kpi_by_name("marginalProfit").compute())]
kpiResults_df = pd.DataFrame(kpiResults, columns=list(TKpiResult._fields))
outputs = dict()
outputs['demandAllocationResults'] = demandAllocationResults_df
outputs['productionResults'] = productionResults_df
outputs['kpiResults'] = kpiResults_df


TProduction = namedtuple("TProduction", ["Plants", "Months", "Products", "value"])
production = []
for pl in plants:
    for pr in products:
        for mo in horizon:
            val = Production[pl, pr, mo].solution_value
            dar = TProduction(pl, mo, pr, val)
            production.append(dar)                      
production_df = pd.DataFrame(production, columns=list(TProduction._fields))    
outputs['production'] = production_df

TExecutedSales = namedtuple("TExecutedSales", ["Markets", "Months", "Products", "value"])
executedsales = []
for ma in markets:
    for pr in products:
        for mo in horizon:
            val = ExecutedSales[pr, ma, mo].solution_value
            dar = TExecutedSales(ma, mo, pr, val)
            executedsales.append(dar)                      
executedsales_df = pd.DataFrame(executedsales, columns=list(TExecutedSales._fields))    
outputs['executed_sales'] = executedsales_df

TInventory = namedtuple("TInventory", ["Markets", "Months", "Products", "value"])
inventory = []
for ma in markets:
    for pr in products:
        for mo in horizon:
            val = Inventory[pr, ma, mo].solution_value
            dar = TInventory(ma, mo, pr, val)
            inventory.append(dar)                      
inventory_df = pd.DataFrame(inventory, columns=list(TInventory._fields))    
outputs['markets_inventory'] = inventory_df

TAllocation = namedtuple("TAllocation", ["Markets", "Months", "Products", "value"])
allocation = []
for ma in markets:
    for pr in products:
        for mo in horizon:
            val = Allocation[pr, ma, mo].solution_value
            dar = TAllocation(ma, mo, pr, val)
            allocation.append(dar)                      
allocation_df = pd.DataFrame(allocation, columns=list(TAllocation._fields))    
outputs['markets_allocation'] = allocation_df
