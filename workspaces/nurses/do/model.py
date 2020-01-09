#dd-markdown # The Nurse Assignment Problem
#dd-markdown 
#dd-markdown This tutorial includes everything you need to set up IBM Decision Optimization CPLEX Modeling for Python (DOcplex), build a Mathematical Programming model, and get its solution by solving the model on the cloud with IBM ILOG CPLEX Optimizer.
#dd-markdown 
#dd-markdown When you finish this tutorial, you'll have a foundational knowledge of _Prescriptive Analytics_.
#dd-markdown 
#dd-markdown >This notebook is part of [Prescriptive Analytics for Python](https://rawgit.com/IBMDecisionOptimization/docplex-doc/master/docs/index.html).
#dd-markdown 
#dd-markdown >It requires a valid subscription to **Decision Optimization on Cloud** or a **local installation of CPLEX Optimizers**. 
#dd-markdown Discover us [here](https://developer.ibm.com/docloud).
#dd-markdown 
#dd-markdown 
#dd-markdown Table of contents:
#dd-markdown 
#dd-markdown -  [Describe the business problem](#Describe-the-business-problem)
#dd-markdown *  [How decision optimization (prescriptive analytics) can help](#How--decision-optimization-can-help)
#dd-markdown *  [Use decision optimization](#Use-decision-optimization)
#dd-markdown     *  [Step 1: Download the library](#Step-1:-Download-the-library)
#dd-markdown     *  [Step 2: Set up the engines](#Step-2:-Set-up-the-prescriptive-engine)
#dd-markdown     -  [Step 3: Model the data](#Step-3:-Model-the-data)
#dd-markdown     *  [Step 4: Prepare the data](#Step-4:-Prepare-the-data)
#dd-markdown     -  [Step 5: Set up the prescriptive model](#Step-5:-Set-up-the-prescriptive-model)
#dd-markdown         * [Define the decision variables](#Define-the-decision-variables)
#dd-markdown         * [Express the business constraints](#Express-the-business-constraints)
#dd-markdown         * [Express the objective](#Express-the-objective)
#dd-markdown         * [Solve with the Decision Optimization solve service](#Solve-with-the-Decision-Optimization-solve-service)
#dd-markdown     *  [Step 6: Investigate the solution and run an example analysis](#Step-6:-Investigate-the-solution-and-then-run-an-example-analysis)
#dd-markdown *  [Summary](#Summary)
#dd-markdown 
#dd-markdown ****
#dd-markdown ## Describe the business problem
#dd-markdown 
#dd-markdown This notebook describes how to use CPLEX Modeling for Python together with *pandas* to
#dd-markdown manage the assignment of nurses to shifts in a hospital.
#dd-markdown 
#dd-markdown Nurses must be assigned to hospital shifts in accordance with various skill and staffing constraints.
#dd-markdown 
#dd-markdown The goal of the model is to find an efficient balance between the different objectives:
#dd-markdown 
#dd-markdown * minimize the overall cost of the plan and
#dd-markdown * assign shifts as fairly as possible.
#dd-markdown ## How  decision optimization can help
#dd-markdown 
#dd-markdown * Prescriptive analytics (decision optimization) technology recommends actions that are based on desired outcomes.  It takes into account specific scenarios, resources, and knowledge of past and current events. With this insight, your organization can make better decisions and have greater control of business outcomes.  
#dd-markdown 
#dd-markdown * Prescriptive analytics is the next step on the path to insight-based actions. It creates value through synergy with predictive analytics, which analyzes data to predict future outcomes.  
#dd-markdown 
#dd-markdown * Prescriptive analytics takes that insight to the next level by suggesting the optimal way to handle that future situation. Organizations that can act fast in dynamic conditions and make superior decisions in uncertain environments gain a strong competitive advantage.  
#dd-markdown <br/>
#dd-markdown 
#dd-markdown <u>With prescriptive analytics, you can:</u> 
#dd-markdown 
#dd-markdown * Automate the complex decisions and trade-offs to better manage your limited resources.
#dd-markdown * Take advantage of a future opportunity or mitigate a future risk.
#dd-markdown * Proactively update recommendations based on changing events.
#dd-markdown * Meet operational goals, increase customer loyalty, prevent threats and fraud, and optimize business processes.
#dd-markdown ## Checking minimum requirements
#dd-markdown This notebook uses some features of pandas that are available in version 0.17.1 or above.
#dd-cell
import pip
REQUIRED_MINIMUM_PANDAS_VERSION = '0.17.1'
try:
    import pandas as pd
    assert pd.__version__ >= REQUIRED_MINIMUM_PANDAS_VERSION
except:
    raise Exception("Version %s or above of Pandas is required to run this notebook" % REQUIRED_MINIMUM_PANDAS_VERSION)
#dd-markdown ### Step 2: Set up the prescriptive engine
#dd-markdown 
#dd-markdown * Subscribe to our private cloud offer or Decision Optimization on Cloud solve service [here](https://developer.ibm.com/docloud) if you do not want to use a local solver.
#dd-markdown * Get the service URL and your personal API key and enter your credentials here if accurate:
#dd-cell
# @hidden_cell
url = "https://api-oaas.docloud.ibmcloud.com/job_manager/rest/v1/"
key = "api_f550300e-8e52-4f3e-abf1-0fe1ac428d93"
#dd-markdown ### Step 3: Model the data
#dd-markdown 
#dd-markdown The input data consists of several tables:
#dd-markdown 
#dd-markdown * The Departments table lists all departments in the scope of the assignment.
#dd-markdown * The Skills table list all skills.
#dd-markdown * The Shifts table lists all shifts to be staffed. A shift contains a department, a day in the week, plus the start and end times.
#dd-markdown * The Nurses table lists all nurses, identified by their names.
#dd-markdown * The NurseSkills table gives the skills of each nurse.
#dd-markdown * The SkillRequirements table lists the minimum number of persons required for a given department and skill.
#dd-markdown * The NurseVacations table lists days off for each nurse.
#dd-markdown * The NurseAssociations table lists pairs of nurses who wish to work together.
#dd-markdown * The NurseIncompatibilities table lists pairs of nurses who do not want to work together.
#dd-markdown #### Loading data from Excel with pandas
#dd-markdown 
#dd-markdown We load the data from an Excel file using *pandas*.
#dd-markdown Each sheet is read into a separate *pandas* DataFrame.
#dd-cell
# This notebook requires pandas to work
import pandas as pd
from pandas import DataFrame
#dd-cell
df_skills = inputs['Skills']
df_depts  = inputs['Departments']
df_shifts = inputs['Shifts']
# Rename df_shifts index
#df_shifts.index.name = 'shiftId'

# Index is column 0: name
df_nurses = inputs['Nurses']
df_nurse_skilles = inputs['NurseSkills']
df_vacations = inputs['NurseVacations']
df_associations = inputs['NurseAssociations']
df_incompatibilities = inputs['NurseIncompatibilities']
#dd-cell
df_shifts.index.name = 'shiftId'
df_nurses.set_index('name', inplace=True)     

# Display the nurses dataframe
print("#nurses = {}".format(len(df_nurses)))
print("#shifts = {}".format(len(df_shifts)))
print("#vacations = {}".format(len(df_vacations)))
#dd-markdown In addition, we introduce some extra global data:
#dd-markdown 
#dd-markdown * The maximum work time for each nurse.
#dd-markdown * The maximum and minimum number of shifts worked by a nurse in a week.
#dd-cell
# maximum work time (in hours)
max_work_time = 40

# maximum number of shifts worked in a week.
max_nb_shifts = 5
#dd-markdown Shifts are stored in a separate DataFrame.
#dd-cell
df_shifts
#dd-markdown ### Step 4: Prepare the data
#dd-markdown 
#dd-markdown We need to precompute additional data for shifts. 
#dd-markdown For each shift, we need the start time and end time expressed in hours, counting from the beginning of the week: Monday 8am is converted to 8, Tuesday 8am is converted to 24+8 = 32, and so on.
#dd-markdown 
#dd-markdown #### Sub-step #1
#dd-markdown We start by adding an extra column `dow` (day of week) which converts the string "day" into an integer in 0..6 (Monday is 0, Sunday is 6).
#dd-cell
days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
day_of_weeks = dict(zip(days, range(7)))

# utility to convert a day string e.g. "Monday" to an integer in 0..6
def day_to_day_of_week(day):
    return day_of_weeks[day.strip().lower()]

# for each day name, we normalize it by stripping whitespace and converting it to lowercase
# " Monday" -> "monday"
df_shifts["dow"] = df_shifts.day.apply(day_to_day_of_week)
df_shifts
#dd-markdown #### Sub-step #2 : Compute the absolute start time of each shift.
#dd-markdown 
#dd-markdown Computing the start time in the week is easy: just add `24*dow` to column `start_time`. The result is stored in a new column `wstart`.
#dd-cell
df_shifts["wstart"] = df_shifts.start_time + 24 * df_shifts.dow
#dd-markdown #### Sub-Step #3 : Compute the absolute end time of each shift.
#dd-markdown 
#dd-markdown Computing the absolute end time is a little more complicated as certain shifts span across midnight. For example, Shift #3 starts on Monday at 18:00 and ends Tuesday at 2:00 AM. The absolute end time of Shift #3 is 26, not 2.
#dd-markdown The general rule for computing absolute end time is:
#dd-markdown 
#dd-markdown `abs_end_time = end_time + 24 * dow + (start_time>= end_time ? 24 : 0)`
#dd-markdown 
#dd-markdown Again, we use *pandas* to add a new calculated column `wend`. This is done by using the *pandas* `apply` method with an anonymous `lambda` function over rows. The `raw=True` parameter prevents the creation of a *pandas* Series for each row, which improves the performance significantly on large data sets.
#dd-cell
# an auxiliary function to calculate absolute end time of a shift
def calculate_absolute_endtime(start, end, dow):
    return 24*dow + end + (24 if start>=end else 0)

# store the results in a new column
df_shifts["wend"] = df_shifts.apply(lambda row: calculate_absolute_endtime(
        row.start_time, row.end_time, row.dow), axis=1, raw=True)
#dd-markdown #### Sub-step #4 : Compute the duration of each shift.
#dd-markdown 
#dd-markdown Computing the duration of each shift is now a straightforward difference of columns. The result is stored in column `duration`.
#dd-cell
df_shifts["duration"] = df_shifts.wend - df_shifts.wstart
#dd-markdown #### Sub-step #5 : Compute the minimum demand for each shift.
#dd-markdown 
#dd-markdown Minimum demand is the product of duration (in hours) by the minimum required number of nurses. Thus, in number of 
#dd-markdown nurse-hours, this demand is stored in another new column `min_demand`.
#dd-markdown 
#dd-markdown Finally, we display the updated shifts DataFrame with all calculated columns.
#dd-cell
# also compute minimum demand in nurse-hours
df_shifts["min_demand"] = df_shifts.min_req * df_shifts.duration

# finally check the modified shifts dataframe
df_shifts
#dd-markdown ### Step 5: Set up the prescriptive model
#dd-cell
from docplex.mp.environment import Environment
env = Environment()
env.print_information()
#dd-markdown #### Create the DOcplex model
#dd-markdown The model contains all the business constraints and defines the objective.
#dd-markdown 
#dd-markdown We now use CPLEX Modeling for Python to build a Mixed Integer Programming (MIP) model for this problem.
#dd-cell
from docplex.mp.model import Model
mdl = Model(name="nurses")
#dd-markdown #### Define the decision variables
#dd-markdown 
#dd-markdown For each (nurse, shift) pair, we create one binary variable that is equal to 1 when the nurse is assigned to the shift.
#dd-markdown 
#dd-markdown We use the `binary_var_matrix` method of class `Model`, as each binary variable is indexed by _two_ objects: one nurse and one shift.
#dd-cell
# first global collections to iterate upon
all_nurses = df_nurses.index.values
all_shifts = df_shifts.index.values

# the assignment variables.
def make_shift_name(shift_idx):
    shift_row = df_shifts.iloc[shift_idx]
    # keep first 3 characters in departement, uppercased
    dept2 = shift_row.department[0:4].upper()
    # keep 3 days of weekday
    dayname = shift_row.day[0:3].lower()
    return '%s_%s_%02d' % (dept2, dayname, shift_row.start_time)

# the assignment variables.
assigned = mdl.binary_var_matrix(keys1=all_nurses, keys2=all_shifts, name=lambda ns: "NurseAssigned_%s_%s" % (ns[0], make_shift_name(ns[1])))
#dd-markdown #### Express the business constraints
#dd-markdown 
#dd-markdown #####  Overlapping shifts
#dd-markdown 
#dd-markdown Some shifts overlap in time, and thus cannot be assigned to the same nurse.
#dd-markdown To check whether two shifts overlap in time, we start by ordering all shifts with respect to their *wstart* and *duration* properties. Then, for each shift, we iterate over the subsequent shifts in this ordered list to easily compute the subset of overlapping shifts.
#dd-markdown 
#dd-markdown We use *pandas* operations to implement this algorithm. But first, we organize all decision variables in a DataFrame.
#dd-markdown 
#dd-markdown For convenience, we also organize the decision variables in a pivot table with *nurses* as row index and *shifts* as columns. The *pandas* *unstack* operation does this.
#dd-cell
# Organize decision variables in a DataFrame
df_assigned = DataFrame({'assigned': assigned})
df_assigned.index.names=['all_nurses', 'all_shifts']

# Re-organize the Data Frame as a pivot table with nurses as row index and shifts as columns:
#df_assigned_pivot = df_assigned.unstack(level='all_shifts')

# Create a pivot using nurses and shifts index as dimensions
df_assigned_pivot = df_assigned.reset_index().pivot(index='all_nurses', columns='all_shifts', values='assigned')

# Display first rows of the pivot table
df_assigned_pivot.head()
#dd-markdown We create a DataFrame representing a list of shifts sorted by *"wstart"* and *"duration"*.
#dd-markdown This sorted list will be used to easily detect overlapping shifts.
#dd-markdown 
#dd-markdown Note that indices are reset after sorting so that the DataFrame can be indexed with respect to
#dd-markdown the index in the sorted list and not the original unsorted list. This is the purpose of the *reset_index()*
#dd-markdown operation which also adds a new column named *"shiftId"* with the original index.
#dd-cell
# Create a Data Frame representing a list of shifts sorted by wstart and duration.
# One keeps only the three relevant columns: 'shiftId', 'wstart' and 'wend' in the resulting Data Frame 
df_sorted_shifts = df_shifts.sort_values(['wstart','duration']).reset_index()[['shiftId', 'wstart', 'wend']]

# Display the first rows of the newly created Data Frame
df_sorted_shifts.head()
#dd-markdown Next, we state that for any pair of shifts that overlap in time, a nurse can be assigned to only one of the two.
#dd-cell
number_of_incompatible_shift_constraints = 0
for shift in df_sorted_shifts.itertuples():
    # Iterate over following shifts
    # 'shift[0]' contains the index of the current shift in the df_sorted_shifts Data Frame
    for shift_2 in df_sorted_shifts.iloc[shift[0] + 1:].itertuples():
        if (shift_2.wstart < shift.wend):
            # Iterate over all nurses to force incompatible assignment for the current pair of overlapping shifts
            for nurse_assignments in df_assigned_pivot[[shift.shiftId, shift_2.shiftId]].itertuples():
                # this is actually a logical OR
                mdl.add_constraint(nurse_assignments[1] + nurse_assignments[2] <= 1)
                number_of_incompatible_shift_constraints += 1
        else:
            # No need to test overlap with following shifts
            break
print("#incompatible shift constraints: {}".format(number_of_incompatible_shift_constraints))
#dd-markdown ##### Vacations
#dd-markdown 
#dd-markdown When the nurse is on vacation, he cannot be assigned to any shift starting that day.
#dd-markdown 
#dd-markdown We use the *pandas* *merge* operation to create a join between the *"df_vacations"*, *"df_shifts"*, and *"df_assigned"* DataFrames. Each row of the resulting DataFrame contains the assignment decision variable corresponding to the matching (nurse, shift) pair.
#dd-cell
# Add 'day of week' column to vacations Data Frame
df_vacations['dow'] = df_vacations.day.apply(day_to_day_of_week)

# Join 'df_vacations', 'df_shifts' and 'df_assigned' Data Frames to create the list of 'forbidden' assigments.
# The 'reset_index()' function is invoked to move 'shiftId' index as a column in 'df_shifts' Data Frame, and
# to move the index pair ('all_nurses', 'all_shifts') as columns in 'df_assigned' Data Frame.
# 'reset_index()' is invoked so that a join can be performed between Data Frame, based on column names.
df_assigned_reindexed = df_assigned.reset_index()
df_vacation_forbidden_assignments = df_vacations.merge(df_shifts.reset_index()[['dow', 'shiftId']]).merge(
    df_assigned_reindexed, left_on=['nurse', 'shiftId'], right_on=['all_nurses', 'all_shifts'])

# Here are the first few rows of the resulting Data Frames joins
df_vacation_forbidden_assignments.head()
#dd-cell
for forbidden_assignment in df_vacation_forbidden_assignments.itertuples():
    # to forbid an assignment just set the variable to zero.
    mdl.add_constraint(forbidden_assignment.assigned == 0)
print("# vacation forbids: {} assignments".format(len(df_vacation_forbidden_assignments)))
#dd-markdown ##### Associations
#dd-markdown 
#dd-markdown Some pairs of nurses get along particularly well, so we wish to assign them together as a team. In other words, for every such couple and for each shift, both assignment variables should always be equal.
#dd-markdown Either both nurses work the shift, or both do not.
#dd-markdown 
#dd-markdown In the same way we modeled *vacations*, we use the *pandas* merge operation to create a DataFrame for which each row contains the pair of nurse-shift assignment decision variables matching each association.
#dd-cell
# Join 'df_assignment' Data Frame twice, based on associations to get corresponding decision variables pairs for all shifts
# The 'suffixes' parameter in the second merge indicates our preference for updating the name of columns that occur both
# in the first and second argument Data Frames (in our case, these columns are 'all_nurses' and 'assigned').
df_preferred_assign = df_associations.merge(
    df_assigned_reindexed, left_on='nurse1', right_on='all_nurses').merge(
    df_assigned_reindexed, left_on=['nurse2', 'all_shifts'], right_on=['all_nurses', 'all_shifts'], suffixes=('_1','_2'))

# Here are the first few rows of the resulting Data Frames joins
df_preferred_assign.head()
#dd-markdown The associations constraint can now easily be formulated by iterating on the rows of the *"df_preferred_assign"* DataFrame.
#dd-cell
for preferred_assign in df_preferred_assign.itertuples():
    mdl.add_constraint(preferred_assign.assigned_1 == preferred_assign.assigned_2)
#dd-markdown ##### Incompatibilities
#dd-markdown 
#dd-markdown Similarly, certain pairs of nurses do not get along well, and we want to avoid having them together on a shift.
#dd-markdown In other terms, for each shift, both nurses of an incompatible pair cannot be assigned together to the sift. Again, we state a logical OR between the two assignments: at most one nurse from the pair can work the shift.
#dd-markdown 
#dd-markdown We first create a DataFrame whose rows contain pairs of invalid assignment decision variables, using the same *pandas* `merge` operations as in the previous step.
#dd-cell
# Join assignment Data Frame twice, based on incompatibilities Data Frame to get corresponding decision variables pairs
#  for all shifts
df_incompatible_assign = df_incompatibilities.merge(
    df_assigned_reindexed, left_on='nurse1', right_on='all_nurses').merge(
    df_assigned_reindexed, left_on=['nurse2', 'all_shifts'], right_on=['all_nurses', 'all_shifts'], suffixes=('_1','_2'))

# Here are the first few rows of the resulting Data Frames joins
df_incompatible_assign.head()
#dd-markdown The incompatibilities constraint can now easily be formulated, by iterating on the rows of the *"df_incompatible_assign"* DataFrame.
#dd-cell
for incompatible_assign in df_incompatible_assign.itertuples():
    mdl.add_constraint(incompatible_assign.assigned_1 + incompatible_assign.assigned_2 <= 1)
#dd-markdown ##### Constraints on work time
#dd-markdown 
#dd-markdown Regulations force constraints on the total work time over a week;
#dd-markdown and we compute this total work time in a new variable. We store the variable in an extra column in the nurse DataFrame.
#dd-markdown 
#dd-markdown The variable is declared as _continuous_ though it contains only integer values. This is done to avoid adding unnecessary integer variables for the _branch and bound_ algorithm. 
#dd-markdown These variables are not true decision variables; they are used to express work constraints.
#dd-markdown 
#dd-markdown From a *pandas* perspective, we apply a function over the rows of the nurse DataFrame to create this variable and store it into a new column of the DataFrame.
#dd-cell
# auxiliary function to create worktime variable from a row
def make_var(row, varname_fmt):
    return mdl.continuous_var(name=varname_fmt % row.name, lb=0)

# apply the function over nurse rows and store result in a new column
df_nurses["worktime"] = df_nurses.apply(lambda r: make_var(r, "worktime_%s"), axis=1)

# display nurse dataframe
df_nurses
#dd-markdown ###### Define total work time
#dd-markdown 
#dd-markdown Work time variables must be constrained to be equal to the sum of hours actually worked.
#dd-markdown 
#dd-markdown We use the *pandas* *groupby* operation to collect all assignment decision variables for each nurse in a separate series. Then, we iterate over nurses to post a constraint calculating the actual worktime for each nurse as the dot product of the series of nurse-shift assignments with the series of shift durations.
#dd-cell
# Use pandas' groupby operation to enforce constraint calculating worktime for each nurse as the sum of all assigned
#  shifts times the duration of each shift
for nurse, nurse_assignments in df_assigned.groupby(level='all_nurses'):
    mdl.add_constraint(df_nurses.worktime[nurse] == mdl.dot(nurse_assignments.assigned, df_shifts.duration))
                       
# print model information and check we now have 32 extra continuous variables
mdl.print_information()
#dd-markdown ###### Maximum work time
#dd-markdown 
#dd-markdown For each nurse, we add a constraint to enforce the maximum work time for a week.
#dd-markdown Again we use the `apply` method, this time with an anonymous lambda function.
#dd-cell
# we use pandas' apply() method to set an upper bound on all worktime variables.
def set_max_work_time(v):
    v.ub = max_work_time
    # Optionally: return a string for fancy display of the constraint in the Output cell
    return str(v) + ' <= ' + str(v.ub)

df_nurses["worktime"].apply(convert_dtype=False, func=set_max_work_time)
#dd-markdown ##### Minimum requirement for shifts
#dd-markdown 
#dd-markdown Each shift requires a minimum number of nurses. 
#dd-markdown For each shift, the sum over all nurses of assignments to this shift
#dd-markdown must be greater than the minimum requirement.
#dd-markdown 
#dd-markdown The *pandas* *groupby* operation is invoked to collect all assignment decision variables for each shift in a separate series. Then, we iterate over shifts to post the constraint enforcing the minimum number of nurse assignments for each shift.
#dd-cell
# Use pandas' groupby operation to enforce minimum requirement constraint for each shift
for shift, shift_nurses in df_assigned.groupby(level='all_shifts'):
    mdl.add_constraint(mdl.sum(shift_nurses.assigned) >= df_shifts.min_req[shift])
#dd-markdown #### Express the objective
#dd-markdown 
#dd-markdown The objective mixes different (and contradictory) KPIs. 
#dd-markdown 
#dd-markdown The first KPI is the total salary cost, computed as the sum of work times over all nurses, weighted by pay rate.
#dd-markdown 
#dd-markdown We compute this KPI as an expression from the variables we previously defined by using the panda summation over the DOcplex objects.
#dd-cell
# again leverage pandas to create a series of expressions: costs of each nurse
total_salary_series = df_nurses.worktime * df_nurses.pay_rate

# compute global salary cost using pandas sum()
# Note that the result is a DOcplex expression: DOcplex if fully compatible with pandas
total_salary_cost = total_salary_series.sum()
mdl.add_kpi(total_salary_cost, "Total salary cost")
mdl.add_kpi(df_nurses.worktime.sum(), "Total worked hours")
#dd-markdown ##### Minimizing salary cost
#dd-markdown 
#dd-markdown In a preliminary version of the model, we minimize the total salary cost. This is accomplished
#dd-markdown using the `Model.minimize()` method.
#dd-cell
mdl.minimize(total_salary_cost)
mdl.print_information()
#dd-markdown ### Step 6: Investigate the solution and then run an example analysis
#dd-markdown 
#dd-markdown We take advantage of *pandas* to analyze the results. First we store the solution values of the assignment variables into a new *pandas* Series.
#dd-markdown 
#dd-markdown Calling `solution_value` on a DOcplex variable returns its value in the solution (provided the model has been successfully solved).
#dd-cell
# When using the solve_hook, a solution is passed. From the solution, I can access the model.
# From the model, I can access any variable by its name. As I want to access them from their keys, I attach the matrix to the model.
mdl.assigned = assigned
#dd-cell
from docplex.util.environment import get_environment
#dd-cell
import threading
#dd-cell
def make_kpi_df(solution):
    kpi_as_tuples = [(kp.name, kp.compute(solution)) for kp in solution.model.iter_kpis()]
    kpi_as_tuples.append(('objective_', solution.objective_value))
    return DataFrame.from_records(kpi_as_tuples, columns=['kpi', 'value'])
#dd-cell
from copy import deepcopy
from six import iteritems

def build_solution(solution):
    assigned_vars = solution.model.assigned
    report = []
    for k,v in iteritems(assigned_vars):
        if v._get_solution_value(solution) >= 0.5:
            k2 = deepcopy(k)
            k2 = k2 + (k[0],)
            k2 = k2 + (df_shifts.get_value(k[1], 'department'),)
            k2 = k2 + (df_shifts.get_value(k[1], 'day'),)
            k2 = k2 + ( ((df_shifts.get_value(k[1], 'end_time') - df_shifts.get_value(k[1], 'start_time')) % 24 ) ,)
            report.append(k2)
    report_df = pd.DataFrame(report, columns=['nurse_id', 'shift', 'nurse_name', 'shift_department', 'shift_day', 'shift_duration'])
    df_kpis = make_kpi_df(solution)
    
    report = {}
    report["kpis"] = df_kpis
    report["shift_assignments"] = report_df
    return report
#dd-cell
#mdl.solution_hook = build_solution
#dd-cell
# Set Cplex mipgap to 1e-5 to enforce precision to be of the order of a unit (objective value magnitude is ~1e+5).
mdl.parameters.mip.tolerances.mipgap = 1e-5

s = mdl.solve(url=url, key=key, log_output=True)
assert s, "solve failed"
mdl.report()
#dd-cell
outputs = build_solution(s)
#dd-cell
for k,v in iteritems(outputs):
    print(v)
#dd-cell
outputs
