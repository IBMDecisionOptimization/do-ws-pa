#dd-markdown ### Global settings
#dd-markdown * Time limit (in seconds) 
#dd-cell
TIME_LIMIT = 30

EXPORT_MODEL_FILE = False
WRITE_OUTPUT_TO_EXCEL = False

use_case_id = 'iris-6088'
output_excel_file_name = use_case_id +'_do_output'
local_root = 'C:/Projects/RetailStorePlanner/GitHub/Retail_Store_Planner' #If running on local machine
#dd-markdown ### Imports
#dd-cell
import pandas as pd
#dd-markdown # Generic/library function definitions<a class="anchor" id="functions"></a>
#dd-markdown ### Model export
#dd-markdown Export model to an .lp or .cpo file
#dd-cell
import os

def env_is_dsx():
    '''Return true if environment is DSX'''
    return 'DSX_PROJECT_DIR' in os.environ

def dsx_export_as_lp(model, model_name = None, local_dir = None, dsx_dir = 'datasets'):
    '''Export .lp file of model in the 'DSX_PROJECT_DIR.datasets' folder as a .csv file, so it can be exported to a local machine.
    If not in DSX, it will write to the local file system in the 'local_dir' directory.
    If neither in DSX or the local_dir is not defined, no .lp file is exported.
    
    Args:
        model: The docplex.mp.model to be exported
        model_name: name of .lp file. If none specified, will use the model.name
        local_dir: name of local directory. Will write .lp file here, if specified and if not in DSX
        dsx_dir: name of directory in DSX_PROJECT_DIR. Default = 'datasets'
    :returns: path to lp file
    '''
    
    if model_name is None:
        model_name = model.name
    if env_is_dsx(): #Test if we are in DSX
        lp_file_name = os.path.join(os.environ['DSX_PROJECT_DIR'],dsx_dir,model_name+'.lp')
        model.export_as_lp(lp_file_name) #Writes the .lp file

        #Work-around: rename the file to a .csv file. This allows DSXL to show 'Export' menu-option.
        csv_file_name =os.path.join(os.environ['DSX_PROJECT_DIR'],dsx_dir,model_name+'_lp.csv')
        os.rename(lp_file_name, csv_file_name)
        #print('Saved .lp file in DSX as {0}'.format(csv_file_name))
        return csv_file_name
    elif local_dir is not None:
        lp_file_name = os.path.join(local_dir, model_name+'.lp')
        model.export_as_lp(lp_file_name)
        #print ('Saved local .lp file as {0}'.format(lp_file_name))
        return lp_file_name
    else:
        #print ('Not in DSX and no local_dir specified: cannot write .lp file')
        return None
    
def dsx_export_as_cpo(model, model_name = None, local_dir = None, dsx_dir = 'datasets', **kwargs):
    '''Export .cpo file of model in the 'DSX_PROJECT_DIR.datasets' folder as a .csv file, so it can be exported to a local machine.
    If not in DSX, it will write to the local file system in the 'local_dir' directory.
    If neither in DSX or the local_dir is not defined, no .cpo file is exported.
    
    :model: The docplex.cp.model to be exported
    :model_name: name of .cpo file. If none specified, will use the model.name
    :local_dir: name of local directory. Will write .cpo file here, if specified and if not in DSX
    :dsx_dir: name of directory in DSX_PROJECT_DIR. Default = 'datasets'
    returns path to cpo file
    '''
    
    if model_name is None:
        model_name = model.name
    if env_is_dsx(): #Test if we are in DSX
        lp_file_name = os.path.join(os.environ['DSX_PROJECT_DIR'],dsx_dir,model_name+'.cpo')
#         model.export_as_cpo(out=lp_file_name, **kwargs) #Writes the .cpo file
        model.export_model(out=lp_file_name, **kwargs) #Writes the .cpo file

        #Work-around: rename the file to a .csv file. This allows DSXL to show 'Export' menu-option.
        csv_file_name =os.path.join(os.environ['DSX_PROJECT_DIR'],dsx_dir,model_name+'_cpo.csv')
        os.rename(lp_file_name, csv_file_name)
        #print('Saved .lp file in DSX as {0}'.format(csv_file_name))
        return csv_file_name
    elif local_dir is not None:
        lp_file_name = os.path.join(local_dir, model_name+'.lp')
        model.export_as_lp(lp_file_name)
        #print ('Saved local .lp file as {0}'.format(lp_file_name))
        return lp_file_name
    else:
        #print ('Not in DSX and no local_dir specified: cannot write .lp file')
        return None
#dd-markdown Re-usable functions to emphasise best-practice pattern.<br>
#dd-markdown Added as new method on a CPLEX Model so usage is very close to a call to the other methods of Model.
#dd-cell
from docplex.mp.model import Model

def integer_var_series(self, df, **kargs):
    '''Create a Series of integer dvar for each row in the DF. Most effective method. Best practice.
    Result can be assigned to a column of the df.
    Usage:
        df['xDVar'] = mdl.integer_var_series(df, name = 'xDVar')
    Args:
        mdl: CPLEX Model
        df: DataFrame
        **kargs: arguments passed to mdl.integer_var_list method. E.g. 'name'
        
    :returns: pandas.Series with integer dvars, index matches index of df
    '''
    #We are re-using the index from the DF index:
    return pd.Series(mdl.integer_var_list(df.index, **kargs), index = df.index)

def continuous_var_series(self, df, **kargs):
    return pd.Series(mdl.continuous_var_list(df.index, **kargs), index = df.index)

def binary_var_series(self, df, **kargs):
    return pd.Series(mdl.binary_var_list(df.index, **kargs), index = df.index)


#Bind method to class:
Model.integer_var_series = integer_var_series
Model.continuous_var_series = continuous_var_series
Model.binary_var_series = binary_var_series
#dd-cell
import numpy as np
def count_index_duplicates(df):
    '''Returns the number of duplicate entries in index of df.'''
    return np.sum(df.index.duplicated())
setattr(pd.DataFrame, "count_index_duplicates", count_index_duplicates)

def verify_index_integrity(df):
    '''Returns true if number in duplicates in index of df is zero.'''
    return (df.count_index_duplicates() == 0)

setattr(pd.DataFrame, "verify_index_integrity", verify_index_integrity)

def assert_index_integrity(df):
    n = df.count_index_duplicates()
    assert n == 0, "DataFrame has {} duplicate entries in the index.".format(n)
setattr(pd.DataFrame, "assert_index_integrity", assert_index_integrity)
#dd-cell
inputs.keys()
#dd-markdown # DataFrames prepare<a class="anchor" id="dataframe_prepare"></a>
#dd-markdown * Set (multi) indices on input data-frames
#dd-cell
# print(pd.__version__)
#dd-cell
stores = inputs['Store'].set_index(['store_geo_code','store_option_id'], verify_integrity = True)
geos = inputs['Geo'].set_index(['geo_code'], verify_integrity = True)
geo_stores = (inputs['GeoToStorePerformance']
              .rename(columns={'geo_code':'customer_geo_code'}) #Works in both NB and DO
#               .rename({'geo_code':'customer_geo_code'}, axis = 1) #fails in DO
              .set_index(['customer_geo_code','store_geo_code','store_option_id'], verify_integrity = True)
)
params =  inputs['Parameter'].set_index(['param'], verify_integrity = True)

geo_competitor_performance = inputs['GeoToCompetitorPerformance'].set_index(['geo_code','store_id'], verify_integrity = True)
#dd-cell
#HACK! To be corrected in Excel data: encode as False/True
booleanDictionary = {'N': False, 'Y': True}
# stores['is_open'] = stores['is_open'].replace(booleanDictionary)
#dd-cell
stores.head()
#dd-cell
geos.head()
#dd-cell
geo_stores.head()
#dd-cell
geo_competitor_performance.head()
#dd-markdown ## Parameters
#dd-markdown From input Parameter table
#dd-cell
max_num_new_stores = 0 #zero implies no limit
if 'MaxNewStores' in params.index:
    max_num_new_stores = int(params.loc['MaxNewStores'].value)
print('Parameter MaxNewStores = {}'.format(max_num_new_stores))
#dd-cell
use_revenue_competition = False
if 'UseRevenueWithCompetition' in params.index:
    use_revenue_competition = (params.loc['UseRevenueWithCompetition'].value == 'True')
print('Parameter UseRevenueWithCompetition = {}'.format(use_revenue_competition))
#dd-markdown Minimum return on investment.<br>
#dd-markdown A value of 1 implies 100%, which means the investment must be recouped by an increase in revenue in one time-period.<br>
#dd-markdown A value of 0.5 (50%) means the incremental revenue needs to be higher than half the store opening cost.
#dd-cell
min_roi = 0.5
if 'MinimumROI' in params.index:
    min_roi = float((params.loc['MinimumROI'].value))
print('Parameter MinimumROI = {}'.format(min_roi))
#dd-markdown If maximize_revenue is true, the default objective of maximizing profit is replaced by maximizing revenue.<br>
#dd-markdown Note that the ROI constraint will ensure the investments are recouped.
#dd-cell
maximize_revenue = False
if 'MaximizeRevenue' in params.index:
    maximize_revenue = (params.loc['MaximizeRevenue'].value == 'True')
print('Parameter MaximizeRevenue = {}'.format(max_num_new_stores))
#dd-markdown # Data Checker<a class="anchor" id="data_checker"></a>
#dd-markdown # Pre-processing<a class="anchor" id="pre_procesing"></a>
#dd-markdown Select potential stores, i.e. stores that are not open yet
#dd-cell
# potential_stores = stores.query('is_open == False')
# potential_stores = stores[stores.is_open == False]
potential_stores = stores[~stores.is_open]
potential_stores.head()
#dd-markdown Select which revenue to use: including or excluding competition
#dd-cell
if use_revenue_competition:
    geo_stores['turnover'] = geo_stores.turnover_w_competition
else:
    geo_stores['turnover'] = geo_stores.turnover_no_competition
#dd-markdown ## Baseline solution
#dd-markdown Creates a base-line solution: for each geo, the highest revenue existing store.<br>
#dd-markdown This table has no direct impact on the optimization.<br>
#dd-markdown The total revenue can be used as a baseline to compute an *increase* in revenue instead of an absolute revenue.
#dd-markdown 
#dd-markdown Computed based on the geo_store_performance: per geo_code, get the maximum value for the turnover.
#dd-cell
geo_stores.head()
#dd-cell
# df = geo_stores[geo_stores['is_open']][['turnover','drive_time']]
# geo_store_baseline = df.loc[df.groupby(['customer_geo_code'])['turnover'].idxmax()]
# geo_store_baseline.head()
#VT: note quite sure if the reset_index before doing the groupby and the loc is necessary. 

df = geo_stores[geo_stores['is_open']][['turnover','drive_time','alpha','beta']].reset_index()
geo_store_baseline = (df.loc[df.groupby(['customer_geo_code'])['turnover'].idxmax()]
                      .rename(columns={'turnover':'baseline_turnover','drive_time':'baseline_drive_time'})
                      .set_index('customer_geo_code', verify_integrity=True)
)
geo_store_baseline.head()
#dd-cell
# # geo_store_baseline
# df = geo_stores[geo_stores['is_open']][['turnover','drive_time']]#.to_frame()
# idx = df.groupby('customer_geo_code')['turnover'].transform(max) == df['turnover']
# geo_store_baseline = (df[idx]
#                       .rename(columns={'turnover':'baseline_turnover','drive_time':'baseline_drive_time'})
#                       .drop_duplicates() #Is NOT removing duplicates in the index!!!!!!
# )
# geo_store_baseline.head()
#dd-markdown Validate integrity of index. How can this be done easier?
#dd-cell
tmp = geo_store_baseline.reset_index().set_index(['customer_geo_code','store_geo_code','store_option_id'],verify_integrity = True)
# geo_store_baseline.index.verify_integrity 
#dd-cell
baseline_revenue = geo_store_baseline['baseline_turnover'].sum()
"$ {:,}".format(baseline_revenue)
#dd-markdown Add baseline revenue to store
#dd-cell
store_baseline_revenue = geo_store_baseline.groupby(['store_geo_code','store_option_id'])['baseline_turnover'].sum().to_frame() #.rename(columns={'turnover': 'baseline_turnover'})
store_baseline_revenue.head()
#dd-markdown Add baseline revenue to stores.
#dd-markdown Place 0 for new stores.
#dd-cell
stores = stores.join(store_baseline_revenue, how='left').fillna(0)
stores.head()
#dd-markdown # Decision Model
#dd-cell
# from docplex.mp.model import Model
mdl = Model(name="StorePlanner")
#dd-markdown # Decision variables<a class="anchor" id="dvars"></a>
#dd-markdown Boolean: `xIsStoreOpen`, for each Store
#dd-cell
stores['xIsStoreOpen'] = mdl.binary_var_series(stores, name = "xIsStoreOpen")
#dd-markdown Boolean: `xIsGeoStoreFlow`, for each Store_x_Geo
#dd-cell
geo_stores['xIsGeoStoreFlow'] = mdl.binary_var_series(geo_stores, name = "xIsGeoStoreFlow")
#dd-markdown Float: `xStoreRevenue`, for each Store
#dd-cell
stores['xStoreRevenue'] = mdl.continuous_var_series(stores, name = "xStoreRevenue")
#dd-cell
stores.head()
#dd-cell
geo_stores.head()
#dd-markdown # Objectives<a class="anchor" id="objectives"></a>
#dd-markdown * Revenue
#dd-markdown * Opening cost
#dd-markdown ## Revenue
#dd-markdown $$
#dd-markdown Revenue = \sum\limits_{\forall store} xStoreRevenue[store]
#dd-markdown $$
#dd-cell
total_revenue = mdl.sum(stores.xStoreRevenue)
incremental_revenue = total_revenue - baseline_revenue
mdl.add_kpi(incremental_revenue, "Incremental Revenue")

#Note: baseline_revenue tends to be far larger than incremental revenue. To allow for clearer KPIs bar graph, omit these 2 large numbers.
# mdl.add_kpi(total_revenue, "Total Revenue")
# mdl.add_kpi(baseline_revenue, "Baseline Revenue")
#dd-markdown ## Opening cost
#dd-markdown In order to compare the one-time expense of the store opening cost versus the perpetual increase in revenue, the opening cost is scaled by the expected ROI (Return On Investment)
#dd-markdown $$
#dd-markdown OpeningCost = \sum\limits_{\forall potential stores} xIsStoreOpen[store] * store.openingCost * minimumROI
#dd-markdown $$
#dd-cell
potential_stores = stores[~stores.is_open]
opening_cost_annualized = mdl.sum(potential_stores.xIsStoreOpen * potential_stores.opening_cost * min_roi)
mdl.add_kpi(opening_cost_annualized, "Opening Cost (annualized)")

opening_cost_absolute = mdl.sum(potential_stores.xIsStoreOpen * potential_stores.opening_cost)
mdl.add_kpi(opening_cost_absolute, "Opening Cost (absolute)")
#dd-markdown ## Number of new stores
#dd-markdown The count of new stores. Only as KPI, not part of the objective.
#dd-cell
new_store_count = mdl.sum(potential_stores.xIsStoreOpen)
mdl.add_kpi(new_store_count, "New Store Count")
#dd-markdown ## Incremental profit
#dd-markdown The incremental profit is the increased revenue minus the (annualized) store opening cost.
#dd-markdown 
#dd-markdown $$
#dd-markdown IncrementalProfit = IncrementalRevenue - AnnualizedOpeningCost
#dd-markdown $$
#dd-markdown This is the default objective
#dd-cell
incremental_profit = incremental_revenue - opening_cost_annualized
mdl.add_kpi(incremental_profit, "Profit Increase")
#dd-markdown ## Objective
#dd-markdown Maximize the incremental profit
#dd-markdown 
#dd-markdown $$
#dd-markdown maximize(IncrementalProfit)
#dd-markdown $$
#dd-cell
if maximize_revenue:
    mdl.maximize(incremental_revenue) #Same effect as total_revenue
else:
    mdl.maximize(incremental_profit)
#dd-markdown # Constraints<a class="anchor" id="constraints"></a>
#dd-markdown ## Store revenue
#dd-markdown For each Store, store revenue is the sum of all incremental revenue flows.
#dd-markdown 
#dd-markdown $$
#dd-markdown xStoreRevenue[store] = \sum\limits_{\forall geoStore Into Store} xIsGeoStoreFlow[geo,store]*geoStore.revenue\quad \forall store
#dd-markdown $$
#dd-cell
for (store_geo, option_id), group in geo_stores.groupby(['store_geo_code','store_option_id']):
    mdl.add_constraint((mdl.sum(group.xIsGeoStoreFlow * group.turnover) == stores.loc[(store_geo, option_id)].xStoreRevenue), 'StoreRevenueC_{}_{}'.format(store_geo, option_id))
#dd-markdown ## Flow into open store
#dd-markdown Only allow a flow into a store that is open.
#dd-markdown $$
#dd-markdown xIsGeoStoreFlow[geo,store] <= xIsStoreOpen[store] \quad \forall geo, store
#dd-markdown $$
#dd-cell
for (store_geo, option_id), group in geo_stores.groupby(['store_geo_code','store_option_id']):
    x_store_open = stores.loc[(store_geo, option_id)].xIsStoreOpen
#     for row in group.itertuples():
#         mdl.add_constraint(row.xIsGeoStoreFlow <= x_store_open, 'FlowToOpenStoreC_{}_{}'.format(store_geo, option_id))
    mdl.add_constraints((
        (row.xIsGeoStoreFlow <= x_store_open) for row in group.itertuples()
        ), 'FlowToOpenStoreC_{}_{}'.format(store_geo, option_id))

        
#Q: is this an application for 'broadcasting'? If so, how does this work?
#     mdl.add_constraints(group.xIsGeoStoreFlow <= stores.loc[(store_geo, option_id)].xIsStoreOpen)
#dd-markdown ## Rational, uniform consumer
#dd-markdown All revenue from one Geo will go to one Store.
#dd-markdown $$
#dd-markdown \sum\limits_{\forall geoStore From Geo} xIsGeoStoreFlow[geo,store] <= 1 \quad \forall geo
#dd-markdown $$
#dd-cell
for geo, group in geo_stores.groupby(['customer_geo_code']):
    #If len of group == 1, then no point generating constraint
    if len(group) > 1:
        mdl.add_constraint(
            mdl.sum(group.xIsGeoStoreFlow) <= 1
            ,'RationalC_{}'.format(geo))
#dd-markdown ## Max number of new stores
#dd-markdown Based on parameter. Disable rule if limit is zero.
#dd-cell
potential_stores = stores[~stores.is_open]#Now includes the dvar
if max_num_new_stores > 0:
    c = mdl.add_constraint(mdl.sum(potential_stores.xIsStoreOpen) <= max_num_new_stores, "MaxNumStores_C")
#dd-markdown ## Minumum Return On Investment
#dd-markdown Ensure that the investment costs (store opening costs) are recouped by an increase in revenue over a minimum amount of time.<br>
#dd-markdown The minimum number of years = 1 / MinimumROI
#dd-markdown An ROI if 1 implies all investment needs to be compensated by increased revenue in the same year.<br>
#dd-markdown An ROI of 0.5 implies 2 years, etc.
#dd-markdown 
#dd-markdown Make sure that if the MinimumROI = 0, the constraint is disabled.
#dd-markdown 
#dd-markdown $$
#dd-markdown revenueIncrease >= openingCost * minROI
#dd-markdown $$
#dd-cell
c = mdl.add_constraint(incremental_revenue >= opening_cost_absolute * min_roi, "MinimumROI")
#dd-markdown # Solve<a class="anchor" id="solve"></a>
#dd-cell
s = mdl.solve(log_output=True, cplex_parameters = {'timelimit':TIME_LIMIT})
assert s, "solve failed"
mdl.report()
#dd-cell
# print("Solving model....")
# msol = mdl.solve(TimeLimit=TIME_LIMIT)
# print("Solution: ")
# msol.print_solution()
#dd-markdown # Post-processing<a class="anchor" id="post_processing"></a>
#dd-markdown ## KPIs
#dd-cell
all_kpis = [(kp.name, kp.compute()) for kp in mdl.iter_kpis()]
df_kpis = pd.DataFrame(all_kpis, columns=['NAME', 'VALUE'])
df_kpis
#dd-markdown ## Extract solution
#dd-markdown * Store.xIsStoreOpen
#dd-markdown * Store.xStoreRevenue
#dd-markdown * GeoStore.xIsGeoStoreFlow
#dd-cell
stores['xIsStoreOpenSol'] = [dvar.solution_value for dvar in stores.xIsStoreOpen]
stores['xStoreRevenueSol'] = [dvar.solution_value for dvar in stores.xStoreRevenue]
geo_stores['xIsGeoStoreFlowSol'] = [dvar.solution_value for dvar in geo_stores.xIsGeoStoreFlow]
#dd-cell
stores.head()
#dd-cell
geo_stores.head()
#dd-markdown ## Post processing
#dd-markdown * StoreOutput
#dd-markdown * GeoStoreOutput
#dd-markdown * GeoStoreBaseline
#dd-markdown 
#dd-markdown 
#dd-markdown * CompetitorOutput
#dd-markdown * GeoCompetitorOutput
#dd-markdown * GeoCompetitorBaseline
#dd-cell
# stores[stores['xStoreRevenueSol'] > 0 & ~stores.is_open].head()
#dd-markdown ## Stores
#dd-cell
stores.head()
#dd-markdown Get only the stores that are open
#dd-cell
store_output_columns = ['is_open', 'opening_cost','baseline_turnover','xStoreRevenueSol']
store_output = (stores[stores['xIsStoreOpenSol'] > 0][store_output_columns]
               .rename(columns={'xStoreRevenueSol':'revenue'}))
store_output['incremental_revenue'] = store_output.revenue - store_output.baseline_turnover
store_output.head()
#dd-cell
geo_stores.head()
#dd-markdown Get the Geo-to-Store for only the 'preferred' stores, i.e. the selected flow.
#dd-markdown 
#dd-markdown Due to the 'rational consumer' constraint, only one entry per IRIS geo, so the key column is IRIS(consumer) geo code
#dd-cell
geo_store_output_columns = ['population','retail_market','drive_time','turnover','alpha','beta','is_open']
# geo_store_output = geo_stores[geo_stores['xIsGeoStoreFlowSol'] > 0][geo_store_output_columns]
geo_store_output = (geo_stores[geo_stores['xIsGeoStoreFlowSol'] > 0][geo_store_output_columns]
                    .reset_index()
                    .set_index('customer_geo_code',verify_integrity = True)
)
#Validate that that no duplicate rows (deprecated: now done by verify_integrity in set_index)
assert geo_store_output[geo_store_output.duplicated()].shape[0] == 0
geo_store_output.head()
#dd-cell
geo_store_baseline.head()
#dd-cell
geo_baseline_turnover = (geo_store_baseline
                         .reset_index()
                         .drop(['store_geo_code','store_option_id'],axis=1)
                         .set_index('customer_geo_code', verify_integrity = True)
)
#dd-cell
geo_baseline_turnover.assert_index_integrity()
geo_baseline_turnover.head()
#dd-cell
geo_store_output.head()
#dd-cell
df = (geo_store_output
#                     .reset_index()
#                     .set_index('customer_geo_code')
                    .join(geo_baseline_turnover,lsuffix='', rsuffix='right')
                    .drop(['alpharight','betaright'], axis=1)
)
df.assert_index_integrity()
df['incremental_revenue'] = df.turnover - df.baseline_turnover
df['market_share'] = 100 * (df.retail_market - df.turnover) / df.retail_market
geo_store_output_2 = df
df.head()
#dd-markdown ## Compute competitor impact
#dd-markdown Compute the impact of the new stores on the competitors.
#dd-markdown Need to compute the baseline solution for the competition and the new solution.
#dd-cell
geo_competitor_performance.head(3)
#dd-markdown Compute the aggregate beta by geo
#dd-cell
geo_aggreated_competitor_rating = geo_competitor_performance[['beta']].groupby('geo_code').sum().rename(columns={'beta':'agg_beta'})
geo_aggreated_competitor_rating.head()
#dd-markdown Add the aggregate-beta to each geo->competitor entry:
#dd-cell
geo_store_baseline.head(3)
# geo_store_output_2.head(3)
#dd-markdown Merge in:
#dd-markdown * aggregated beta
#dd-markdown * client baseline store beta
#dd-markdown * client optimized store beta
#dd-cell
df = (
    geo_competitor_performance
    .reset_index()
    .merge(geo_aggreated_competitor_rating[['agg_beta']].reset_index(), on = 'geo_code') #merge the agg_beta
    .merge(geo_store_baseline[['beta']].reset_index().rename(columns={'customer_geo_code':'geo_code','beta':'baseline_cf_beta'}), on='geo_code')
    .merge(geo_store_output[['retail_market','beta']].reset_index().rename(columns={'customer_geo_code':'geo_code','beta':'optimized_cf_beta'}), on='geo_code')
    .set_index(['geo_code','store_id'], verify_integrity = True)
)
df.head()
#dd-markdown Compute the baseline and optimized revenue for each geo->competitor
#dd-markdown 
#dd-markdown Revenue[geo,store] = retail_market * beta[geo,store]/sum(beta[geo,store])
#dd-cell
df['baseline_revenue'] = df.retail_market * df.beta / (df.agg_beta + df.baseline_cf_beta)
df['optimized_revenue'] = df.retail_market * df.beta / (df.agg_beta + df.optimized_cf_beta)
df['incremental_revenue'] = df.optimized_revenue - df.baseline_revenue
print('range incremental competitor revenue: {:,.2f} - {:,.2f}'.format(df.incremental_revenue.min(), df.incremental_revenue.max()))
print('sum incremental competitor revenue: {:,.2f}'.format(df.incremental_revenue.sum()))
geo_competitor_output = df
df.head()
#dd-cell
# geo_stores.head()
geo_baseline_turnover.head()
#dd-cell
geo_store_output_2.head()
#dd-markdown ## Store output in outputs dict
#dd-cell
outputs['StoreOutput'] = store_output.reset_index()
outputs['GeoStoreOutput'] = geo_store_output_2.reset_index()
outputs['GeoStoreBaseline'] = geo_store_baseline.reset_index()
outputs['GeoCompetitorOutput'] = geo_competitor_output.reset_index()
# outputs['kpis'] = df_kpis
#dd-cell

#dd-cell

#dd-cell

