#dd-cell
food = inputs['diet_food']
nutrients = inputs['diet_nutrients']
food_nutrients = inputs['diet_food_nutrients']
food_nutrients.set_index('diet_food', inplace=True)
#dd-cell
from docplex.mp.model import Model

# Model
mdl = Model(name='diet')

# Create decision variables, limited to be >= Food.qmin and <= Food.qmax
qty = food[['diet_food', 'qmin', 'qmax']].copy()
qty['var'] = qty.apply(lambda x: mdl.continuous_var(lb=x['qmin'],
                                                    ub=x['qmax'],
                                                    name=x['diet_food']),
                       axis=1)
# make the name the index
qty.set_index('diet_food', inplace=True)

# Limit range of nutrients, and mark them as KPIs
for n in nutrients.itertuples():
    amount = mdl.sum(qty.loc[f.diet_food]['var'] * food_nutrients.loc[f.diet_food][n.diet_nutrient]
                     for f in food.itertuples())
    mdl.add_range(n.qmin, amount, n.qmax)
    mdl.add_kpi(amount, publish_name='Total %s' % n.diet_nutrient)

# Minimize cost
obj = mdl.sum(qty.loc[f.diet_food]['var'] * f.unit_cost for f in food.itertuples())
mdl.add_kpi(obj, publish_name="Minimal cost");
mdl.minimize(obj)

mdl.print_information()
#dd-markdown <h1>Solve</h1>
#dd-cell
ok = mdl.solve()
#dd-cell
mdl.print_solution()
#dd-markdown Make dataframe from solution
#dd-cell
import pandas
import numpy

solution_df = pandas.DataFrame(columns=['diet_food', 'value'])

for index, dvar in enumerate(mdl.solution.iter_variables()):
    solution_df.loc[index,'diet_food'] = dvar.to_string()
    solution_df.loc[index,'value'] = dvar.solution_value
#dd-cell
solution_df
#dd-cell
outputs['solution'] = solution_df
