#dd-cell
import pandas as pd

df_customers = inputs['Customer']
customers = df_customers['CustomerID'].values
df_customers.set_index('CustomerID', inplace=True)

df_offers = inputs['Offer'] 
offers = df_offers['OfferID'].values
df_offers.set_index('OfferID', inplace=True)

df_channels = inputs['Channel'] 
channels = df_channels['ChannelID'].values
df_channels.set_index('ChannelID', inplace=True)


df_candidates = inputs['Candidate']
candidates = []
for index, row in df_candidates.iterrows():
    candidate = {}
    candidates.append( (row['CustomerID'], row['OfferID'],row['ChannelID']) )
df_candidates.set_index(["CustomerID", "OfferID","ChannelID"], inplace = True)

df_parameters = inputs['parameters'] 
parameters = df_parameters['name'].values
df_parameters.set_index('name', inplace=True)

df_channels.head()
#dd-cell
from docplex.mp.model import Model
mdl = Model("RetailPlanning")

selected = mdl.binary_var_dict(candidates, name="selected")
df_selected = pd.DataFrame({'selected': selected})
df_selected.index.names=['CustomerID', 'OfferID', 'ChannelID']
df_selected.head()

#dd-cell
budget = float(df_parameters.value['budget'])
#dd-cell
expected_revenue = mdl.sum( selected[(cu, of, ch)] * df_candidates.ExpectedRevenue[(cu, of, ch)] for (cu, of, ch) in candidates) 
mdl.add_kpi(expected_revenue, "Expected revenue");
mdl.maximize(expected_revenue);
#dd-cell
nb_offer = mdl.sum( selected[(cu, of, ch)] for (cu, of, ch) in candidates) 
mdl.add_kpi(nb_offer, "Nb Offer");

total_cost = mdl.sum( selected[(cu, of, ch)] * df_candidates.Cost[(cu, of, ch)] for (cu, of, ch) in candidates) 
mdl.add_kpi(total_cost, "Total Cost");
#dd-cell
for customer in customers:
    mdl.add_constraint( mdl.sum( selected[(cu, of, ch)] for (cu, of, ch) in candidates if cu == customer) <= 1)
#dd-cell
mdl.add_constraint( mdl.sum( selected[(cu, of, ch)]* df_channels.cost[ch]  for (cu, of, ch) in candidates ) <= budget)
mdl.print_information()
#dd-cell
mdl.print_information()
#dd-cell
assert mdl.solve(log_output=True), "!!! Solve of the model fails"
#dd-cell
mdl.report()
#dd-cell
df_selected = df_selected.selected.apply(lambda v: v.solution_value)
print(df_selected)
#dd-cell
df_selected = df_selected.reset_index()
outputs['selected'] = df_selected
#dd-cell

