#dd-cell
import pandas as pd
import numpy as np

df_day = inputs['day']

df_machine = inputs['machine']

df_predicted_failure = inputs['predicted_failure']
df_predicted_failure = df_predicted_failure.set_index(['machine', 'day'])

df_planned_production = inputs['planned_production']
df_planned_production = df_planned_production.set_index(['machine', 'day'])

df_parameters = inputs['parameters']

# first global collections to iterate upon
all_machines = df_machine['id'].values
all_days = df_day['id'].values

data_cumul_failure = []
for machine in all_machines:
    for i, d in np.ndenumerate(all_days):
        cumul = 0
        for i2, d2 in np.ndenumerate(all_days):
            if i2==i:
                break
            cumul += int(df_predicted_failure.failure[machine, d2])
        data_cumul_failure.append((machine, d, cumul))

df_cumul_failure = pd.DataFrame(data_cumul_failure, columns=['machine', 'day', 'cumul_failure'])
df_cumul_failure=df_cumul_failure.set_index(['machine', 'day'])
#dd-cell
from docplex.mp.environment import Environment
env = Environment()
env.print_information()    
#dd-cell
from docplex.mp.model import Model
mdl = Model(name="PredictiveMaintenance")
#dd-cell

# the variables.
production = mdl.continuous_var_matrix(keys1=all_machines, keys2=all_days, name=lambda ns: "Production_%s_%s" % (ns[0],ns[1]))
df_production = pd.DataFrame({'production': production})
df_production.index.names=['all_machines', 'all_days']

maintenance = mdl.binary_var_matrix(keys1=all_machines, keys2=all_days, name=lambda ns: "Maintenance_%s_%s" % (ns[0],ns[1]))
df_maintenance = pd.DataFrame({'maintenance': maintenance})
df_maintenance.index.names=['all_machines', 'all_days']
#dd-cell
for machine in all_machines:       
    maintenance_loss = int(df_machine[df_machine.id==machine]['maintenance loss'])/100.
    capacity = int(df_machine[df_machine.id==machine]['capacity'])
    for day in all_days:   
        prod = df_planned_production.production[machine, day]
        #mdl.add_if_then( maintenance[machine, day] == 1, production[machine, day]== 0 )
        #mdl.add_if_then( maintenance[machine, day] == 0, production[machine, day]== df_production[df_production.machine==machine][df_production.day==day] )
        if (prod <= capacity*(1-maintenance_loss)):
            mdl.add_constraint( production[machine, day] == prod )
        else:
            mdl.add_constraint( production[machine, day] == prod - (prod-capacity*(1-maintenance_loss))*maintenance[machine, day])
        
#dd-cell
# One maintenance per machine
for machine in all_machines:       
    mdl.add_constraint( mdl.sum(maintenance[machine, day] for day in all_days) == 1)
    
maintenance_crew_size = int(df_parameters[df_parameters.id=='maintenance crew size']['value'])

# One maintenance at a time
for day in all_days:       
    mdl.add_constraint( mdl.sum(maintenance[machine, day] for machine in all_machines) <= maintenance_crew_size)

data_cost_maintenance = []
cost_kpis = []
# Cost of repair
for machine in all_machines:           
    #print machine
    life = int(df_machine[df_machine.id==machine]['remaining life'])
    capacity = int(df_machine[df_machine.id==machine]['capacity'])
    cost_of_maintenance = int(df_machine[df_machine.id==machine]['cost of maintenance'])
    maintenance_loss = int(df_machine[df_machine.id==machine]['maintenance loss'])/100.
    cost_of_repair = int(df_machine[df_machine.id==machine]['cost of repair'])
    repair_loss = int(df_machine[df_machine.id==machine]['repair loss'])/100.
    loss_per_life_day = int(df_machine[df_machine.id==machine]['loss per life day'])
    production_value_unit = int(df_machine[df_machine.id==machine]['production value unit'])
    
    previous_day = None
    for i, day in np.ndenumerate(all_days):
        cost = 0;
        prob_break_before = 0
        if (previous_day != None):
            prob_break_before = int(df_cumul_failure.cumul_failure[machine, previous_day])/100.
        previous_day = day
        
        #print prob_break_before
        
        # Cost of lost production if failure before maintenance
        for i2, day2 in np.ndenumerate(all_days):
            if (i2==i):
                break
            prob_break_day2 = int(df_predicted_failure.failure[machine, day2])/100.
            production_day2 = int(df_planned_production.production[machine, day2])
            if (production_day2 > capacity*(1-repair_loss)):
                cost += production_value_unit*prob_break_day2*(production_day2 - capacity*(1-repair_loss))
            
        # Cost of repair if breaking before maintenance
        cost += cost_of_repair*prob_break_before
        
        # Cost of maintenance
        cost += cost_of_maintenance*(1-prob_break_before)
        
        # Cost of lost production for maintenance
        production_day = int(df_planned_production.production[machine, day])
        if (production_day > capacity*(1-maintenance_loss)):
            cost += production_value_unit*(production_day - capacity*(1-maintenance_loss))
        
        # Cost of maintenance too early
        cost += loss_per_life_day*max(life-i[0], 0)
        
        #print cost
        data_cost_maintenance.append((machine, day, cost))
        
        cost_kpis.append(cost*maintenance[machine, day])
        
cost_kpi = mdl.sum(cost_kpis)
mdl.add_kpi(cost_kpi, "Cost")

df_cost_maintenance = pd.DataFrame(data_cost_maintenance, columns=['machine', 'day', 'cost_maintenance'])
#print df_cost_maintenance
#dd-cell
total_planned_production = mdl.sum(df_planned_production.production)
mdl.add_kpi(total_planned_production, "Total Planned Production")
total_production = mdl.sum(df_production.production)
mdl.add_kpi(total_production, "Total Production")
#dd-cell
strategy = int(df_parameters[df_parameters.id=='strategy']['value'])

if (strategy == 1):
    mdl.minimize(cost_kpi)
else:
    early = 10
    late = 1000
    temp = []     
    for machine in all_machines:           
        
        last_day = None
        for i, day in np.ndenumerate(all_days):
            last_day = day;
            cumul_failure = int(df_cumul_failure.cumul_failure[machine, day])
            if (cumul_failure > 0):                            
                temp.append(late * maintenance[machine, day] )
            else:
                temp.append(early * i[0] * maintenance[machine, day] )
        
    late_kpi = mdl.sum(temp)
    mdl.minimize(late_kpi)
#dd-cell
s = mdl.solve(log_output=True)
assert s, "solve failed"
mdl.report()

all_kpis = [(kp.name, kp.compute()) for kp in mdl.iter_kpis()]
df_kpis = pd.DataFrame(all_kpis, columns=['kpi', 'value'])
    
#dd-cell
df_production = df_production.production.apply(lambda v: v.solution_value)
#df_production
#dd-cell
df_maintenance = df_maintenance.maintenance.apply(lambda v: v.solution_value)
#df_maintenance
#dd-cell

df_production = df_production.to_frame()
df_production['machine'] = df_production.index.get_level_values('all_machines') 
df_production['day'] = df_production.index.get_level_values('all_days') 
df_production.columns = ['production', 'machine', 'day'] 
df_production = df_production.reset_index(drop=True)

df_maintenance = df_maintenance.to_frame()
df_maintenance['machine'] = df_maintenance.index.get_level_values('all_machines') 
df_maintenance['day'] = df_maintenance.index.get_level_values('all_days') 
df_maintenance.columns = ['maintenance', 'machine', 'day'] 
df_maintenance = df_maintenance.reset_index(drop=True)

df_cumul_failure=df_cumul_failure.reset_index()

outputs = {}
    

    
outputs['cost_maintenance'] = df_cost_maintenance
outputs['cumul_failure'] = df_cumul_failure
outputs["kpis"] = df_kpis
outputs["maintenance"] = df_maintenance
outputs["production"] = df_production


print df_kpis
#dd-cell
#outputs
#df_maintenance.to_csv(index=False)
#dd-cell

