#dd-markdown # Network Design 
#dd-markdown 
#dd-markdown Network Design is a critical business problems in many industries. 
#dd-markdown For example, a retailer might want to decide where to open a new warehouse to optimize supply chain cost between plants or providers and custoemrs or chops.
#dd-markdown Another example, is a water dsitribuiton company might want to plan improvement i the distribution network, creating new tanks or new pipes.
#dd-markdown 
#dd-markdown From a Decision Optimization perspective, some of these problems are part of the Facility Location Problem (FLP) category.
#dd-markdown A simple version of this problem is presented here, with multiple commodities (products) and a single period.
#dd-markdown 
#dd-markdown Input data is the existing network (nodes and links), with some flow capacities.
#dd-markdown 
#dd-markdown Data also incldues some plans or predictions of what we will be produced atplants or available from providers, and predictions of what is expected by shops or customers.
#dd-markdown 
#dd-markdown The decisions are where to open a new node.
#dd-markdown 
#dd-markdown The problem might include:
#dd-markdown * structural constraints:
#dd-markdown  * what enters into a node is what gets out of a node.
#dd-markdown * constraints on nodes:
#dd-markdown   * limited flow capacity
#dd-markdown * costs on nodes:
#dd-markdown   * fixed cost (i.e. cost to open a new node)
#dd-markdown   * variables flow cost (i.e. cost to manage the items for this node)
#dd-markdown * constraints on links:
#dd-markdown   * limited capacity
#dd-markdown * costs on links:
#dd-markdown   * variable cost according to flos (i.e. transportation cost)
#dd-cell
# Import pandas package to manage data as dataframes
import pandas as pd
#dd-markdown ### Prepare data
#dd-markdown 
#dd-markdown The paramaters input table includes:
#dd-markdown * the minimum and maximal number of new distribution centers to be considered
#dd-markdown * some limits on the niumber f products and custoemrs to consider so that the optimization problem can be reduced and solved into the CPLEX Community Edition available on all environments.
#dd-cell
df_parameters = inputs['PARAMETERS']
df_parameters = df_parameters.set_index(['name'])
MAX_CUSTOMERS = df_parameters.value['MAX_CUSTOMERS']

MAX_PRODUCTS =  df_parameters.value['MAX_PRODUCTS']
print (df_parameters)
#dd-markdown Structure the rest of the data
#dd-cell
df_plants = inputs['PLANTS']
plants = df_plants['id'].values.tolist()
df_plants = df_plants.set_index(['id'])

print ('\nPlants:')
print (df_plants)

df_distributionCenters = inputs['DISTRIBUTION_CENTERS']
distributionCenters = df_distributionCenters['id'].values.tolist()
df_distributionCenters = df_distributionCenters.set_index(['id'])

print ('\nDistribution Centers:')
print (df_distributionCenters)

df_products = inputs['PRODUCTS']
if (MAX_PRODUCTS < len(df_products)):
    df_products = df_products.sample(MAX_PRODUCTS)
products = df_products['id'].values.tolist()

print ('\nProducts:')
print (df_products)

df_customers = inputs['CUSTOMERS']
if (MAX_CUSTOMERS < len(df_customers)):
    df_customers = df_customers.sample(MAX_CUSTOMERS)
customers = df_customers['id'].values.tolist()
df_customers = df_customers.set_index(['id'])

print ('\nCustomers:')
print (df_customers)

df_demand = inputs['DEMAND']
df_demand = df_demand.set_index(['customerId', 'productId'])

df_productionData = inputs['PRODUCTION_DATA']
df_productionData = df_productionData.set_index(['plantId', 'productId'])

df_storageData = inputs['STORAGE_DATA']
df_storageData = df_storageData.set_index(['dcId', 'productId'])

df_inboundData = inputs['INBOUND_DATA']
df_inboundData = df_inboundData.set_index(['plantId', 'dcId'])


df_outboundData = inputs['OUTBOUND_DATA']
df_outboundData = df_outboundData.set_index(['dcId', 'customerId'])
#dd-markdown ### Create the Decision Optimization model
#dd-markdown 
#dd-markdown Let's now create the optimization model using the `docplex.mp` package
#dd-cell
# CREATE CPLEX MODEL

from docplex.mp.model import Model
mdl = Model(name='NetworkDesign');
#dd-markdown ### Create the decision variables
#dd-markdown 
#dd-markdown We now create the decision variables:
#dd-markdown * binary variable for each distribution center candidate, indictaing whether or not it should be open
#dd-markdown * continuous variable for each product on each plant to distribution center segment indicating how much of this product flows on this link
#dd-markdown * continuous variable for each product on each distribution center to customer segment indicating how much of this product flows on this link
#dd-markdown 
#dd-markdown We also create auxiliary decision variables to represent:
#dd-markdown * the cost of shipping products from distribution centers to customers
#dd-markdown * the cost of storing products in distribution centers
#dd-cell
# CREATE VARIABLES

openDC = mdl.binary_var_dict(distributionCenters, name='openDC')
shipDCToCustomer = mdl.continuous_var_cube(distributionCenters, products, customers, lb=0, name='shipDCToCustomer')
shipPlantToDC = mdl.continuous_var_cube(plants, products, distributionCenters, lb=0, name='shipPlantToDC')

shipDCCost = mdl.continuous_var_dict(distributionCenters, lb=0, name='shipDCCost')
storeDCCost = mdl.continuous_var_dict(distributionCenters, lb=0, name='storeDCCost')


mdl.print_information()
#dd-markdown ### Create the KPIs
#dd-markdown 
#dd-markdown We create a KPI (Key Performance Indictaor) for each of the costs:
#dd-markdown * variable plant cost
#dd-markdown * inbound transportation cost (from plant to distribution center)
#dd-markdown * outbound transportation cost (from distribution center to customer)
#dd-markdown * fixed distribution centers cost 
#dd-markdown * variable distribution center cost
#dd-markdown 
#dd-markdown We also create a KPI to easily report the number of new opened distribution centers.
#dd-cell
# CREATE KPIS

variablePlantCost = mdl.sum( df_productionData.varPlantCost[pl, pr] * shipPlantToDC[pl, pr, dc]
                             for pl in plants for pr in products for dc in distributionCenters)
mdl.add_kpi(variablePlantCost, 'variablePlantCost')

inboundTransportationCost = mdl.sum(  df_inboundData.unitCost[pl, dc]*shipPlantToDC[pl, pr, dc]
                                      for pl in plants for pr in products for dc in distributionCenters)
mdl.add_kpi(inboundTransportationCost, 'inboundTransportationCost')

outboundTransportationCost = mdl.sum( shipDCCost[dc] for dc in distributionCenters)
mdl.add_kpi(outboundTransportationCost, 'outboundTransportationCost')

fixedDistributionCenterCost = mdl.sum( df_distributionCenters.fixedCost[d] * openDC[d] for d in distributionCenters);
mdl.add_kpi(fixedDistributionCenterCost, 'fixedDistributionCenterCost');

variableDistributionCenterCost = mdl.sum ( storeDCCost[dc] for dc in distributionCenters)
mdl.add_kpi(variableDistributionCenterCost, 'variableDistributionCenterCost');

nbOpenDistributionCenters = mdl.sum( openDC[dc] for dc in distributionCenters)
mdl.add_kpi(nbOpenDistributionCenters, 'nbOpenDistributionCenters')

mdl.print_information()
#dd-markdown ### Create the objective
#dd-markdown 
#dd-markdown Here the objective is simply the sum of the 5 cost KPIs.
#dd-cell

# CREATE OBJECTIVE

mdl.minimize( variablePlantCost  +  inboundTransportationCost +
          outboundTransportationCost + variableDistributionCenterCost +
          fixedDistributionCenterCost  )

mdl.print_information()
#dd-markdown ### Create the constraints
#dd-markdown 
#dd-markdown The constraints are:
#dd-markdown * capacity constraints:
#dd-markdown   * one on the plants and products
#dd-markdown   * one on the plants and products and distribution centers
#dd-markdown * demand satisfaction: what is shipped to customer is exactly the quantity they expect
#dd-markdown * flow on distribution centers structural constraint: what goes in from plants goes out to customers.
#dd-markdown * cost variables definition constraints 
#dd-cell
# CREATE CONSTRAINTS

#  Two capacity constraints
for pl in plants:
    for pr in products:
        mdl.add_constraint( mdl.sum( shipPlantToDC[pl, pr, dc] for dc in distributionCenters) <= df_productionData.capacity[pl, pr] )
    for dc in distributionCenters:
        for pr in products:
               mdl.add_constraint(shipPlantToDC[pl, pr, dc]  <= openDC[dc] * df_productionData.capacity[pl, pr])

#  Satisfy demand
for cu in customers:
    for pr in products:
        if (cu, pr) in df_demand.index:
            mdl.add_constraint( mdl.sum(shipDCToCustomer[dc, pr ,cu] for dc in distributionCenters) == df_demand.quantity[cu, pr]);

#  Structural constraint flow
for pr in products:
    for dc in distributionCenters:
        mdl.add_constraint( mdl.sum( shipPlantToDC[pl, pr, dc] for pl in plants) ==
                            mdl.sum(shipDCToCustomer[dc, pr, cu] for cu in customers) );

#  cost variable definition
for dc in distributionCenters:
    mdl.add_constraint( shipDCCost[dc] ==
                        mdl.sum(df_outboundData.costPerUnit[dc, cu] * mdl.sum(shipDCToCustomer[dc, pr, cu] for pr in products) for cu in customers) )
    mdl.add_constraint( storeDCCost[dc] ==
                        mdl.sum(df_storageData.costPerUnit[dc, pr] * mdl.sum(shipDCToCustomer[dc, pr, cu] for cu in customers) for pr in products) )

    

mdl.print_information()
#dd-markdown ### Additional constraints
#dd-markdown 
#dd-markdown We also add a constraint on the minimum and maximum number of new distribution centers.
#dd-cell
MIN_OPEN_DCS = df_parameters.value['MIN_OPEN_DCS']
mdl.add_constraint( nbOpenDistributionCenters >= MIN_OPEN_DCS )
MAX_OPEN_DCS = df_parameters.value['MAX_OPEN_DCS']
mdl.add_constraint( nbOpenDistributionCenters <= MAX_OPEN_DCS )

mdl.print_information()
#dd-markdown ### Solve the optimization problem
#dd-markdown 
#dd-markdown We can now solve the optimization problem.
#dd-markdown 
#dd-markdown **Remember that if you don't limit the number of products and/or customers and the number of variables or constraints goes above 1000, you will need to use the dedicate DO environment**
#dd-cell
# Solve
mdl.parameters.threads = 1
mdl.solve(log_output=True)

mdl.report();
#dd-markdown ### Create solution
#dd-markdown 
#dd-markdown Now the problem is solved, we can extarct solutions into pandas fdata frame for a better reporting
#dd-cell
# Create solution

df_openDC = pd.DataFrame(data= [ [dc, openDC[dc].solution_value] for dc in distributionCenters],
                              columns = ['dcId', 'open'] )
print(df_openDC)

df_shipDCToCustomer = pd.DataFrame(data= [ [dc, pr, cu, shipDCToCustomer[dc, pr, cu].solution_value] for dc in distributionCenters for pr in products for cu in customers],
                                   columns = ['dcId', 'productId', 'customerId', 'ship'] )
print (df_shipDCToCustomer)

df_shipPlantToDC = pd.DataFrame(data= [ [pl, pr, dc, shipPlantToDC[pl, pr, dc].solution_value] for pl in plants for pr in products for dc in distributionCenters],
                                columns = ['plantId', 'productId', 'dcId', 'ship'] )
print (df_shipPlantToDC)


df_dcCosts = pd.DataFrame(data= [ [dc, df_distributionCenters.city[dc], shipDCCost[dc].solution_value, storeDCCost[dc].solution_value] for dc in distributionCenters],
                                columns = ['dcId', 'dcCity', 'shipCost', 'storeCost'] )
print(df_dcCosts)

outputs = {}
outputs['openDC'] = df_openDC
outputs['shipDCToCustomer'] = df_shipDCToCustomer
outputs['shipPlantToDC'] = df_shipPlantToDC
outputs['dcCosts'] = df_dcCosts
#dd-cell

