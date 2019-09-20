from docplex.mp.model import *
from docloud.status import JobSolveStatus
from docplex.mp.conflict_refiner import ConflictRefiner, VarUbConstraintWrapper, VarLbConstraintWrapper
import time
import sys

import pandas as pd
import numpy as np


# Return index values of a multi-index from index name
def helper_get_level_values(df, column_name):
    return df.index.get_level_values(df.index.names.index(column_name))

# Label constraint
def helper_add_labeled_cplex_constraint(mdl, expr, label, context=None, columns=None):
    global expr_counter
    if isinstance(expr, bool):
        pass  # Adding a trivial constraint: if infeasible, docplex will raise an exception it is added to the model
    else:
        expr.name = '_L_EXPR_' + str(len(expr_to_info) + 1)
        if columns:
            ctxt = ", ".join(str(getattr(context, col)) for col in columns)
        else:
            if context:
                ctxt = context.Index if isinstance(context.Index, str) is not None else ", ".join(context.Index)
            else:
                ctxt = None
        expr_to_info[expr.name] = (label, ctxt)
    mdl.add(expr)



# Data model definition for each table
# Data collection: list_of_Homedistance ['salesrep', 'state', 'value', 'line']
# Data collection: list_of_Salesrep ['capacity', 'salesrep']
# Data collection: list_of_State ['customers', 'state']

# Create a pandas Dataframe for each data table
list_of_Homedistance = inputs['homedistance']
list_of_Homedistance = list_of_Homedistance[['salesrep', 'state', 'value']].copy()
list_of_Homedistance.rename(columns={'salesrep': 'salesrep', 'state': 'state', 'value': 'value'}, inplace=True)
list_of_Salesrep = inputs['salesrep']
list_of_Salesrep = list_of_Salesrep[['capacity', 'salesrep']].copy()
list_of_Salesrep.rename(columns={'capacity': 'capacity', 'salesrep': 'salesrep'}, inplace=True)
list_of_State = inputs['state']
list_of_State = list_of_State[['customers', 'state']].copy()
list_of_State.rename(columns={'customers': 'customers', 'state': 'state'}, inplace=True)

# Set index when a primary key is defined
list_of_Homedistance.index.name = 'id_of_Homedistance'
list_of_Salesrep.set_index('salesrep', inplace=True)
list_of_Salesrep.sort_index(inplace=True)
list_of_Salesrep.index.name = 'id_of_Salesrep'
list_of_State.set_index('state', inplace=True)
list_of_State.sort_index(inplace=True)
list_of_State.index.name = 'id_of_State'

# Create data frame as cartesian product of: Salesrep x State
list_of_ResourceAssignment = pd.DataFrame(index=pd.MultiIndex.from_product((list_of_Salesrep.index, list_of_State.index), names=['id_of_Salesrep', 'id_of_State']))


def build_model():
    mdl = Model()

    # Definition of model variables
    list_of_ResourceAssignment['resourceAssignmentVar'] = mdl.binary_var_list(len(list_of_ResourceAssignment))


    # Definition of model
    # Objective cMaximizeAssignmentsAutoSelected-
    # Combine weighted criteria: 
    # 	cMaximizeAssignmentsAutoSelected cMaximizeAssignmentsAutoSelected{
    # 	cScaledGoal.scaleFactorExpr = 1,
    # 	cSingleCriterionGoal.goalFilter = null,
    # 	cSingleCriterionGoal.numericExpr = count( cResourceAssignment[salesrep, state]),
    # 	cMaximizeAssignments.assignment = cResourceAssignment[salesrep, state]} with weight 5.0
    # 	cMinimizeGoalAssign cMinimizeGoalAssign{
    # 	cScaledGoal.scaleFactorExpr = 1,
    # 	cSingleCriterionGoal.goalFilter = null,
    # 	cSingleCriterionGoal.numericExpr = distance from cResourceAssignment[salesrep, state] / state / state to cResourceAssignment[salesrep, state] / salesrep / home / state} with weight 5.0
    # 	cMinimizeAssignmentValue cMinimizeAssignmentValue{
    # 	cScaledGoal.scaleFactorExpr = 1,
    # 	cSingleCriterionGoal.goalFilter = null,
    # 	cSingleCriterionGoal.numericExpr = total cResourceAssignment[salesrep, state] / salesrep / valueOfInverse(alldistance, alldistance.cAssignmentValueConcept.resource) [alldistance / activity is cResourceAssignment[salesrep, state] / state] / value,
    # 	cMinimizeAssignmentValue.assignment = cResourceAssignment[salesrep, state],
    # 	cMinimizeAssignmentValue.assignmentValue = alldistance} with weight 5.0
    # 	cMinimizeAssignmentValue cMinimizeAssignmentValue{
    # 	cScaledGoal.scaleFactorExpr = 1,
    # 	cSingleCriterionGoal.goalFilter = null,
    # 	cSingleCriterionGoal.numericExpr = total cResourceAssignment[salesrep, state] / salesrep / inverse(homedistance.salesrep) [homedistance / state is cResourceAssignment[salesrep, state] / state] / value,
    # 	cMinimizeAssignmentValue.assignment = cResourceAssignment[salesrep, state],
    # 	cMinimizeAssignmentValue.assignmentValue = homedistance} with weight 5.0
    join_ResourceAssignment_Homedistance_SG1 = list_of_ResourceAssignment.reset_index().merge(list_of_Homedistance.reset_index(), left_on=['id_of_Salesrep'], right_on=['salesrep']).set_index(list_of_ResourceAssignment.index.names + list(set(list_of_Homedistance.index.names) - set(list_of_ResourceAssignment.index.names)))
    filtered_ResourceAssignment_Homedistance_SG1 = join_ResourceAssignment_Homedistance_SG1.loc[join_ResourceAssignment_Homedistance_SG1.state == helper_get_level_values(join_ResourceAssignment_Homedistance_SG1, 'id_of_State')].copy()
    filtered_ResourceAssignment_Homedistance_SG1['conditioned_value'] = filtered_ResourceAssignment_Homedistance_SG1.resourceAssignmentVar * filtered_ResourceAssignment_Homedistance_SG1.value
    agg_ResourceAssignment_Homedistance_conditioned_value_SG1 = mdl.sum(filtered_ResourceAssignment_Homedistance_SG1.conditioned_value)
    
    mdl.add_kpi(1.0 * (agg_ResourceAssignment_Homedistance_conditioned_value_SG1) / 1, publish_name='overall cost of salesrep to state assignments according to homedistances')
    
    mdl.minimize( 0
        # Sub Goal cMinimizeAssignmentValue_cMinimizeGoal
        # Minimize overall cost of salesrep to state assignments according to homedistances
        + 1.0 * (agg_ResourceAssignment_Homedistance_conditioned_value_SG1) / 1
    )
    
    # [ST_1] Constraint : cLimitNumberOfResourcesAssignedToEachActivity_cIterativeRelationalConstraint
    # The number of salesrep assignments for each state is equal to 1
    # Label: CT_1_The_number_of_salesrep_assignments_for_each_state_is_equal_to_1
    join_State_ResourceAssignment = list_of_State.join(list_of_ResourceAssignment, how='inner')
    groupbyLevels = [join_State_ResourceAssignment.index.names.index(name) for name in list_of_State.index.names]
    groupby_State_ResourceAssignment = join_State_ResourceAssignment.resourceAssignmentVar.groupby(level=groupbyLevels).sum().to_frame()
    for row in groupby_State_ResourceAssignment.itertuples(index=True):
        helper_add_labeled_cplex_constraint(mdl, row.resourceAssignmentVar == 1, 'The number of salesrep assignments for each state is equal to 1', row)
    
    # [ST_2] Constraint : cResourceRelationalConstraint_cIterativeRelationalConstraint
    # For each salesrep, total customers of assigned states is less than capacity
    # Label: CT_2_For_each_salesrep__total_customers_of_assigned_states_is_less_than_capacity
    join_Salesrep_ResourceAssignment = list_of_Salesrep.join(list_of_ResourceAssignment, how='inner')
    join_Salesrep_ResourceAssignment_State = join_Salesrep_ResourceAssignment.join(list_of_State.customers, how='inner')
    join_Salesrep_ResourceAssignment_State['conditioned_customers'] = join_Salesrep_ResourceAssignment_State.resourceAssignmentVar * join_Salesrep_ResourceAssignment_State.customers
    groupbyLevels = [join_Salesrep_ResourceAssignment_State.index.names.index(name) for name in list_of_Salesrep.index.names]
    groupby_Salesrep_ResourceAssignment_State = join_Salesrep_ResourceAssignment_State.conditioned_customers.groupby(level=groupbyLevels).sum().to_frame()
    join_Salesrep_ResourceAssignment_State_Salesrep = groupby_Salesrep_ResourceAssignment_State.join(list_of_Salesrep.capacity, how='inner')
    for row in join_Salesrep_ResourceAssignment_State_Salesrep[join_Salesrep_ResourceAssignment_State_Salesrep.capacity.notnull()].itertuples(index=True):
        helper_add_labeled_cplex_constraint(mdl, row.conditioned_customers <= -0.001 + row.capacity, 'For each salesrep, total customers of assigned states is less than capacity', row)


    return mdl


def solve_model(mdl):
    mdl.parameters.timelimit = 120
    msol = mdl.solve(log_output=True)
    if not msol:
        print("!!! Solve of the model fails")
        if mdl.get_solve_status() == JobSolveStatus.INFEASIBLE_SOLUTION:
            crefiner = ConflictRefiner()
            conflicts = crefiner.refine_conflict(model, log_output=True)
            export_conflicts(conflicts)
    print 'Solve status: ', mdl.get_solve_status()
    mdl.report()
    return msol


expr_to_info = {}


def export_conflicts(conflicts):
    # Display conflicts in console
    print('Conflict set:')
    list_of_conflicts = pd.DataFrame(columns=['constraint', 'context', 'detail'])
    for conflict, index in zip(conflicts, range(len(conflicts))):
        st = conflict.status
        ct = conflict.element
        label, context = expr_to_info.get(conflict.name, ('N/A', conflict.name))
        label_type = type(conflict.element)
        if isinstance(conflict.element, VarLbConstraintWrapper) \
                or isinstance(conflict.element, VarUbConstraintWrapper):
            ct = conflict.element.get_constraint()

        # Print conflict information in console
        print("Conflict involving constraint: %s, \tfor: %s -> %s" % (label, context, ct))
        list_of_conflicts = list_of_conflicts.append(pd.DataFrame({'constraint': label, 'context': str(context), 'detail': ct},
                                                                  index=[index], columns=['constraint', 'context', 'detail']))

    # Update of the ``outputs`` dict must take the 'Lock' to make this action atomic,
    # in case the job is aborted
    #global output_lock
    #with output_lock:
    outputs['list_of_conflicts'] = list_of_conflicts


def export_solution(msol):
    start_time = time.time()
    list_of_ResourceAssignment_solution = pd.DataFrame(index=list_of_ResourceAssignment.index)
    list_of_ResourceAssignment_solution['resourceAssignmentVar'] = msol.get_values(list_of_ResourceAssignment.resourceAssignmentVar.values)

    # Filter rows for non-selected assignments
    list_of_ResourceAssignment_solution = list_of_ResourceAssignment_solution[list_of_ResourceAssignment_solution.resourceAssignmentVar > 0.5]

    # Update of the ``outputs`` dict must take the 'Lock' to make this action atomic,
    # in case the job is aborted
    #global output_lock
    #with output_lock:
    outputs['list_of_ResourceAssignment_solution'] = list_of_ResourceAssignment_solution.reset_index()

    elapsed_time = time.time() - start_time
    print('solution export done in ' + str(elapsed_time) + ' secs')
    return


print('* building wado model')
start_time = time.time()
model = build_model()
elapsed_time = time.time() - start_time
print('model building done in ' + str(elapsed_time) + ' secs')

print('* running wado model')
start_time = time.time()
msol = solve_model(model)
elapsed_time = time.time() - start_time
print('model solve done in ' + str(elapsed_time) + ' secs')
if msol:
    export_solution(msol)
