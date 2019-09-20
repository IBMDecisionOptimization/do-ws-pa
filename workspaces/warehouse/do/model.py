from docplex.mp.model import Model
import pandas as pd
mdl = Model(name="WarehouseReplenishment")

items = inputs['items'].copy()
all_items = inputs['items']['id'].values
items = items.set_index(['id'])
demands = inputs['demands'].copy()
demands = demands.set_index(['item', 'day'])
prices = inputs['prices'].copy()
prices = prices.set_index(['item', 'day'])

constraints = inputs['constraints'].copy()

parameters = inputs['parameters'].copy()
print(parameters)
min_order_qty = int(parameters.value[parameters.name=='min_order_qty'].values[0])
order_delay = int(parameters.value[parameters.name=='order_delay'].values[0])

all_days = list(range(1, 31))

do_order = mdl.integer_var_dict(all_days, name="order")
order_qty = mdl.integer_var_matrix(all_items, all_days, name="order_qty")
stock_qty = mdl.integer_var_matrix(all_items, all_days, name="stock")

#print(do_order)

# Initial stock
for item in all_items:
    mdl.add_constraint(stock_qty[item,1] == items.initialStock[item]);

# Stock conservation
for day in range(2,31):
    for item in all_items:
        mdl.add_constraint(stock_qty[item,day] == stock_qty[item,day-1] + order_qty[item,day] - demands.demand[item,day] );
        
# Safety Stock
for day in range(2,31):
    for item in all_items:
        mdl.add_constraint(stock_qty[item,day] >= items.safetyStock[item] );
        
# do order then order qty != 0 
for day in all_days:
    mdl.add_constraint(do_order[day] <= 1)
    mdl.add_constraint( mdl.sum( order_qty[item,day] for item in all_items ) <= 1000 * do_order[day])
    mdl.add_constraint( mdl.sum( order_qty[item,day] for item in all_items) >= do_order[day]*min_order_qty)
    
# order_delay 
for day in all_days:
    mdl.add_constraint( mdl.sum( do_order[day2] for day2 in range(day, min(30, day+order_delay)) ) <= 1)


order_cost = sum( order_qty[item,day] * prices.price[item,day] for day in all_days for item in all_items)    
stock_cost = sum( stock_qty[item,day] * items.stockCost[item] for day in all_days for item in all_items)    
total_cost = order_cost + stock_cost;
min_stock = mdl.min( stock_qty[item,day] for day in all_days for item in all_items)    
max_stock = mdl.max( stock_qty[item,day] for day in all_days for item in all_items)    
nb_orders = sum( do_order[day] for day in all_days )    

mdl.add_kpi(order_cost, "Order Cost")
mdl.add_kpi(stock_cost, "Stock Cost")
mdl.add_kpi(total_cost, "Total Cost")
mdl.add_kpi(min_stock, "Min Stock")
mdl.add_kpi(max_stock, "Max Stock")
mdl.add_kpi(nb_orders, "Number of Orders")

mdl.minimize(total_cost)


for c in constraints['id'].values:    
    print ('additional constraint')
    kpi = nb_orders;
    if (constraints.kpi[c] == 'Min Stock'):
        kpi = min_stock;
    if (constraints.kpi[c] == 'Max Stock'):
        kpi = max_stock;
    if (constraints.kpi[c] == 'Order Cost'):
        kpi = order_cost;      
    if (constraints.kpi[c] == 'Stock Cost'):
        kpi = stock_cost;  
    if (constraints.kpi[c] == 'Total Cost'):
        kpi = total_cost;         
    value = float(constraints.value[c])
    if (constraints.sense[c] < 0):
        mdl.add_constraint(kpi <= value)
    else:
        if (constraints.sense[c] == 0):
            mdl.add_constraint(kpi == value)
        else:
            mdl.add_constraint(kpi >= value)
            
mdl.solve(log_output=True)

outputs ={}
outputs['do_order'] = pd.DataFrame(columns=['day', 'do_order'], data=[[day, do_order[day].solution_value] for day in all_days])     
outputs['stock'] = pd.DataFrame(columns=['item', 'day', 'quantity'], data=[[item, day, stock_qty[item, day].solution_value] for item in all_items for day in all_days])     
outputs['order'] = pd.DataFrame(columns=['item', 'day', 'quantity'], data=[[item, day, order_qty[item, day].solution_value] for item in all_items for day in all_days])     
costs = [] 
for item in all_items:
    for day in all_days:
        costs.append( ['Stock', item, day, stock_qty[item,day].solution_value * items.stockCost[item]] )
        costs.append( ['Order', item, day, order_qty[item,day].solution_value * prices.price[item,day]] )
outputs['costs'] = pd.DataFrame(columns=['type', 'item', 'day', 'cost'], data = costs)
outputs['orders'] = pd.DataFrame(columns=['id', 'item', 'day', 'quantity'], data=[[str(item) + '-' + str(day), item, day, order_qty[item, day].solution_value] for item in all_items for day in all_days if order_qty[item, day].solution_value >1 ])     
   
explanations = []
explanations.append( ['Total Cost would be ' + str(total_cost.solution_value-100) + ' if order delay would be ' + str(order_delay-1)])
explanations.append( ['Total Cost would be ' + str(total_cost.solution_value-150) + ' if order quantity would be ' + str(min_order_qty-1)])
outputs['explanations'] = pd.DataFrame(columns=['explanation'], data=explanations);


