import pandas as pd;
inputs = {};
outputs = {};
inputs["Periods"] = pd.read_csv("Periods.csv")
inputs["Units"] = pd.read_csv("Units.csv")
inputs["UnitMaintenances"] = pd.read_csv("UnitMaintenances.csv")
inputs["Loads"] = pd.read_csv("Loads.csv")

from docplex.mp.environment import Environment
from docplex.mp.model import Model
import pandas as pd

url = None
key = None

df_units = inputs['Units']
df_units.set_index(df_units["Units"], inplace=True)
df_loads = inputs['Loads']
df_loads.set_index(df_loads["Periods"], inplace=True)
df_periods = inputs['Periods']
df_periods.set_index(df_periods["Id"], inplace=True)
df_maint = inputs['UnitMaintenances']

robust = 0

env = Environment()
#env.print_information()

ucpm = Model("ucp")
n_starts = None

units = df_units['Units'].values.tolist()

nb_periods = len(df_loads)

# periods range from 1 to nb_periods included
periods = range(1, nb_periods+1)

# in use[u,t] is true iff unit u is in production at period t
in_use = ucpm.binary_var_matrix(keys1=units, keys2=periods, name="in_use")

# true if unit u is turned on at period t
turn_on = ucpm.binary_var_matrix(keys1=units, keys2=periods, name="turn_on")

# true if unit u is switched off at period t
# modeled as a continuous 0-1 variable, more on this later
turn_off = ucpm.continuous_var_matrix(keys1=units, keys2=periods, lb=0, ub=1, name="turn_off")

# production of energy for unit u at period t
production = ucpm.continuous_var_matrix(keys1=units, keys2=periods, name="production")

# Organize all decision variables in a DataFrame indexed by 'Units' and 'Periods'
df_decision_vars = pd.DataFrame({'in_use': in_use, 'turn_on': turn_on, 'turn_off': turn_off, 'production': production})

# Set index names
df_decision_vars.index.names=['Units', 'Periods']

# Create a join between 'df_decision_vars' and 'df_up' Data Frames based on common index id (ie: 'Units')
# In 'df_up', one keeps only relevant columns: 'min_gen' and 'max_gen'
df_join_decision_vars_up = df_decision_vars.join(df_units[['min_generation', 'max_generation']], how='inner')

# When in use, the production level is constrained to be between min and max generation.
for item in df_join_decision_vars_up.itertuples(index=False):
	ucpm += (item.production <= item.max_generation * item.in_use)
	ucpm += (item.production >= item.min_generation * item.in_use)
	
# Initial state
# If initial production is nonzero, then period #1 is not a turn_on
# else turn_on equals in_use
# Dual logic is implemented for turn_off
for u in units:
	if df_units.init_prod_level[u] > 0:
		# if u is already running, not starting up
		ucpm.add_constraint(turn_on[u, 1] == 0)
		# turnoff iff not in use
		ucpm.add_constraint(turn_off[u, 1] + in_use[u, 1] == 1)
	else:
		# turn on at 1 iff in use at 1
		ucpm.add_constraint(turn_on[u, 1] == in_use[u, 1])
		# already off, not switched off at t==1
		ucpm.add_constraint(turn_off[u, 1] == 0)
		
# Use groupby operation to process each unit
for unit, r in df_decision_vars.groupby(level='Units'):
	u_ramp_up = df_units.ramp_up[unit]
	u_ramp_down = df_units.ramp_down[unit]
	u_initial = df_units.init_prod_level[unit]
	# Initial ramp up/down
	# Note that r.production is a Series that can be indexed as an array (ie: first item index = 0)
	ucpm.add_constraint(r.production[0] - u_initial <= u_ramp_up)
	ucpm.add_constraint(u_initial - r.production[0] <= u_ramp_down)
	for (p_curr, p_next) in zip(r.production, r.production[1:]):
		ucpm.add_constraint(p_next - p_curr <= u_ramp_up)
		ucpm.add_constraint(p_curr - p_next <= u_ramp_down)         
		
# Turn_on, turn_off
# Use groupby operation to process each unit
for unit, r in df_decision_vars.groupby(level='Units'):
	for (in_use_curr, in_use_next, turn_on_next, turn_off_next) in zip(r.in_use, r.in_use[1:], r.turn_on[1:], r.turn_off[1:]):
		# if unit is off at time t and on at time t+1, then it was turned on at time t+1
		ucpm.add_constraint(in_use_next - in_use_curr <= turn_on_next)

		# if unit is on at time t and time t+1, then it was not turned on at time t+1
		# mdl.add_constraint(in_use_next + in_use_curr + turn_on_next <= 2)

		# if unit is on at time t and off at time t+1, then it was turned off at time t+1
		ucpm.add_constraint(in_use_curr - in_use_next + turn_on_next == turn_off_next)        
		
# Minimum uptime, downtime
for unit, r in df_decision_vars.groupby(level='Units'):
	min_uptime   = df_units.min_up[unit]
	min_downtime = df_units.min_down[unit]
	# Note that r.turn_on and r.in_use are Series that can be indexed as arrays (ie: first item index = 0)
	for t in range(min_uptime, nb_periods):
		ctname = "min_up_{0!s}_{1}".format(*r.index[t])
		ucpm.add_constraint(ucpm.sum(r.turn_on[(t - min_uptime) + 1:t + 1]) <= r.in_use[t], ctname)

	for t in range(min_downtime, nb_periods):
		ctname = "min_down_{0!s}_{1}".format(*r.index[t])
		ucpm.add_constraint(ucpm.sum(r.turn_off[(t - min_downtime) + 1:t + 1]) <= 1 - r.in_use[t], ctname)
		
# Enforcing demand
# we use a >= here to be more robust, 
# objective will ensure  we produce efficiently
for period, r in df_decision_vars.groupby(level='Periods'):
	total_demand = df_loads.value[df_periods['Id'].iloc[period-1]]
	ctname = "ct_meet_demand_%d" % period
	ucpm.add_constraint(ucpm.sum(r.production) >= total_demand + robust, ctname) 
	
# Predefined usage
if 'used' in inputs:
	df_used = inputs['used']
	for p in periods:
		for u in units:
			ucpm.add_constraint(in_use[u, p] == df_used[u][p])

# UnitMaintenances
for p in periods:
    myp = df_periods['Id'].iloc[p-1]
    for u in units:
	    if (df_maint[(df_maint['Units']==u) & (df_maint['Periods']==myp)]['value'].values[0] == 1):
		    ucpm.add_constraint(in_use[u, p] == 0)
		
# Create a join between 'df_decision_vars' and 'df_up' Data Frames based on common index ids (ie: 'units')
# In 'df_up', one keeps only relevant columns: 'fixed_cost', 'variable_cost', 'start_cost' and 'co2_cost'
df_join_obj = df_decision_vars.join(
	df_units[['constant_cost', 'linear_cost', 'start_up_cost', 'co2_cost']], how='inner')        
		
# objective
total_fixed_cost = ucpm.sum(df_join_obj.in_use * df_join_obj.constant_cost)
total_variable_cost = ucpm.sum(df_join_obj.production * df_join_obj.linear_cost)
total_startup_cost = ucpm.sum(df_join_obj.turn_on * df_join_obj.start_up_cost)
total_co2_cost = ucpm.sum(df_join_obj.production * df_join_obj.co2_cost)
total_economic_cost = total_fixed_cost + total_variable_cost + total_startup_cost
total_cost = total_economic_cost + total_co2_cost

total_nb_used = ucpm.sum(df_decision_vars.in_use)
total_nb_starts = ucpm.sum(df_decision_vars.turn_on)

if (n_starts is not None):
	ucpm.add_constraint(total_nb_starts == n_starts)

# store expression kpis to retrieve them later.
ucpm.add_kpi(total_fixed_cost   , "Total Fixed Cost")
ucpm.add_kpi(total_variable_cost, "Total Variable Cost")
ucpm.add_kpi(total_startup_cost , "Total Startup Cost")
ucpm.add_kpi(total_economic_cost, "Total Economic Cost")
ucpm.add_kpi(total_co2_cost     , "Total CO2 Cost")
ucpm.add_kpi(total_cost         , "Total Cost")
ucpm.add_kpi(total_nb_used, "Total #used")
ucpm.add_kpi(total_nb_starts, "Total #starts")

# minimize sum of all costs
ucpm.minimize(total_fixed_cost + total_variable_cost + total_startup_cost + total_co2_cost)

if ucpm.solve(url=url, key=key):
	print "  Feasible " + str(ucpm.objective_value)

	df_prods = df_decision_vars.production.apply(lambda v: v.solution_value).unstack(level='Units')
	df_used = df_decision_vars.in_use.apply(lambda v: v.solution_value).unstack(level='Units')
	df_started = df_decision_vars.turn_on.apply(lambda v: v.solution_value).unstack(level='Units')

	all_kpis = [(kp.name, kp.compute()) for kp in ucpm.iter_kpis()]
	all_kpis.append(("Feasibility", 1))
	kpis_bd = pd.DataFrame(all_kpis, columns=['kpi', 'value'])

	df_production = df_prods.copy()
	df_production = df_production.stack(level='Units').to_frame()
	df_production['Units'] = df_production.index.get_level_values('Units') 
	df_production['Periods'] = df_production.index.get_level_values('Periods') 
	df_production['Periods'] = df_production['Periods'].apply(lambda p : df_periods['Id'].iloc[p-1])
	df_production.columns = ['value', 'Units', 'Periods'] 
	df_production = df_production.reset_index(drop=True)
	
	df_used = df_used.copy()
	df_used = df_used.stack(level='Units').to_frame()
	df_used['Units'] = df_used.index.get_level_values('Units') 
	df_used['Periods'] = df_used.index.get_level_values('Periods') 
	df_used['Periods'] = df_used['Periods'].apply(lambda p : df_periods['Id'].iloc[p-1])
	df_used.columns = ['value', 'Units', 'Periods'] 
	df_used = df_used.reset_index(drop=True)
	
	df_started = df_started.copy()
	df_started = df_started.stack(level='Units').to_frame()
	df_started['Units'] = df_started.index.get_level_values('Units') 
	df_started['Periods'] = df_started.index.get_level_values('Periods') 
	df_started['Periods'] = df_started['Periods'].apply(lambda p : df_periods['Id'].iloc[p-1])
	df_started.columns = ['value', 'Units', 'Periods'] 
	df_started = df_started.reset_index(drop=True)
	
	outputs = {}
	outputs['production'] = df_production
	#outputs['prods'] = df_prods
	outputs['used'] = df_used
	outputs['started'] = df_started
	outputs['kpis'] = kpis_bd
else:
	print "  Infeasible"
	all_kpis= [("Feasibility", 0)]
	kpis_bd = pd.DataFrame(all_kpis, columns=['kpi', 'value'])
	outputs = {}
	outputs['kpis'] = kpis_bd
from docplex.util.environment import get_environment
get_environment().store_solution(outputs)
