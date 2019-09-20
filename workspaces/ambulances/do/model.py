
from collections import namedtuple

NamedPoint = namedtuple('NamedPoint', ['id', 'LONGITUDE', 'LATITUDE'])

import math
def get_distance(p1, p2):
    if p1 == p2:
        return 0
    else:
        dx = p1.LONGITUDE - p2.LONGITUDE
        dy = p1.LATITUDE - p2.LATITUDE
        dist = math.sqrt(dx * dx + dy * dy)
        return dist

import pandas as pd

import csv

df_parameters = inputs['parameters']

nb_ambulances =float(df_parameters.iloc[0].value);

accidents =  inputs['predicted-accidents']


locations_prob = {NamedPoint(t.id, float(t.LONGITUDE), float(t.LATITUDE)) : float(t.accident_prob) for t in accidents.itertuples(index=False)}

from docplex.mp.model import Model

mdl = Model("accidents")

locations = locations_prob.keys()
ambulance_locations = locations
ambulance_vars = mdl.binary_var_dict(ambulance_locations)
link_vars = mdl.binary_var_matrix(ambulance_locations, locations)


# 1st constraint: each library must be linked to a coffee shop that is open.
mdl.add_constraints(link_vars[c_loc, b] <= ambulance_vars[c_loc]
                    for b in locations
                    for c_loc in ambulance_locations)

# 2nd constraint: each library is linked to exactly one coffee shop.
mdl.add_constraints(mdl.sum(link_vars[c_loc, b] for c_loc in ambulance_locations) == 1
                    for b in locations)

# 3rd constraint: there is a fixed number of coffee shops to open.
# Total nb of open coffee shops
mdl.add_constraint(mdl.sum(ambulance_vars[c_loc] for c_loc in ambulance_locations) == nb_ambulances)

# #### Express the objective
# The objective is to minimize the total distance from libraries to coffee shops so that a book reader always gets to our coffee shop easily.
# Minimize total distance from points to hubs
total_distance = mdl.sum((1/locations_prob[b])**2*link_vars[c_loc, b] * get_distance(c_loc, b) for c_loc in ambulance_locations for b in locations)
mdl.minimize(total_distance)
mdl.add_kpi(total_distance, "Total distance")
mdl.add_kpi(nb_ambulances, "Nb ambulances")

mdl.print_information()

assert mdl.solve(), "!!! Solve of the model fails"

# ### Step 6: Investigate the solution and then run an example analysis
# The solution can be analyzed by displaying the location of the coffee shops on a map.
total_distance = mdl.objective_value
open_ambulances = [c_loc for c_loc in ambulance_locations if ambulance_vars[c_loc].solution_value == 1]
df_open_ambulances = pd.DataFrame(data=open_ambulances);

links = [ (loc1.id, loc2.id) for loc1 in ambulance_locations for loc2 in ambulance_locations if link_vars[loc1, loc2].solution_value == 1] 
df_links = pd.DataFrame(data = links, columns=['id1', 'id2']);

from docplex.util.environment import get_environment
env = get_environment()

outputs = {}
outputs['ambulances'] = df_open_ambulances
outputs['links'] = df_links
