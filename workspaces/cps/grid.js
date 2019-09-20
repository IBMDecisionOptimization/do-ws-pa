
scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget(0, 2, 2, 2);

assignments_data = undefined;
assignments_qty = undefined;

function prepareSolution1(scenario) {

        if (scenario.contains("Task") && 
                scenario.contains("Individual_Resource") &&
                scenario.contains("Finite_Capacity_Resource") &&
                scenario.contains("list_of_Task_solution") &&
                scenario.contains("list_of_SchedulingAssignment_solution") &&
                scenario.contains("FCResource_Request")) {
                var individualResources = scenario.getTableRows("Individual_Resource");
                var finiteCapacityResources = scenario.getTableRows("Finite_Capacity_Resource")
                var tasks = scenario.getTableRows("Task")
				var modules = scenario.getTableRows("Module")
                assignments_data = [];
                assignments_qty = [];                

                var solution = scenario.getTableRows('list_of_Task_solution');
                var activities = {}
                var i, l, vals, taskId, resId, start, end, activity, includedin, quantity, finitecapacityresource;
                for (s in solution) {
                        sol = solution[s];

                        taskId = sol['id_of_Task'];
                        start = sol['taskStartVarDate'];
                        end = sol['taskEndVarDate'];

                        let task = tasks[taskId];
						
                        let module = modules[task.Module];

                        activity = {
                                "id":taskId,
                                "name": taskId,
                                "start": new Date(start).getTime(),
                                "end": new Date(end).getTime(),
                                "module" : task.Module,
                                "project" : module.Project
                        }
                        activities[taskId] = activity;
                }


                var assignments  = scenario.getTableRows('list_of_SchedulingAssignment_solution');
                var resources = {}
                resources['Individual'] = {
                        "id" : "Individual",
                        "name" : "Individual",
                        "activities" : [],
                        "parent" : ""
                }
                var individualResource, pool;
                for (a in assignments) {
                        assignment = assignments[a];

                        resId = assignment['id_of_Individual_Resource'];
                        taskId = assignment['id_of_Task'];

                        activity = activities[taskId];
                        
                        if (activity == undefined) {
                                console.log("Missing task from schedule " + taskId);
                                continue;
                        }

                        individualResource = individualResources[resId];
                        if (individualResource == undefined) {
                                console.log("Missing individual resource  from schedule " + resId);
                                continue;
                        }

                        pool = individualResource["Pool"];
                        if (!(pool in resources)) {
                                resources[pool] = {
                                        "id" : pool,
                                        "name" : pool,
                                        "activities" : [],
                                        "parent" : "Individual"
                                }
                        }
                        if (resId in resources)
                                resources[resId].activities.push(activity);
                        else
                                resources[resId] = {
                                        "id" : resId,
                                        "name" : resId,
                                        "activities" : [activity],
                                        "parent" : pool
                                }

                        if (assignments_qty[resId] == undefined)
                                assignments_qty[resId] = [];
                        assignments_qty[resId][taskId] = 1;
                }
                

                resources['Finite Capacity'] = {
                        "id" : "Finite Capacity",
                        "name" : "Finite Capacity",
                        "activities" : [],
                        "parent" : ""
                }
                
                var request = scenario.getTableRows('FCResource_Request');
                for (r in request) {
                        req = request[r];

                        resId = req['Finite Capacity Resource'];
                        taskId = req['Task'];
                        quantity  = req['Quantity'];

                        activity = activities[taskId];

                        if (activity == undefined) {
                                console.log("Missing task from schedule " + taskId);
                                continue;
                        }

                        finitecapacityresource = finiteCapacityResources[resId];
                        if (finitecapacityresource == undefined) {
                                console.log("Missing finite capacity  resource  from schedule " + resId);
                                continue;
                        }

                        //includedin = finitecapacityresource["Included In"];
                        includedin = finitecapacityresource["Description"];
                        if (includedin == "")
                                includedin = "Finite Capacity"
                        else if (!(includedin in resources)) {
                                resources[includedin] = {
                                        "id" : includedin,
                                        "name" : includedin,
                                        "activities" : [],
                                        "parent" : "Finite Capacity"
                                }
                        }

                        if (resId in resources)
                                resources[resId].activities.push(activity);
                        else
                                resources[resId] = {
                                        "id" : resId,
                                        "name" : finiteCapacityResources[resId]['Long Name'],
                                        "activities" : [activity],
                                        "parent" : includedin
                                }
                        if (assignments_qty[resId] == undefined)
                                assignments_qty[resId] = [];
                        assignments_qty[resId][taskId] = quantity;
                }
                for (res in resources) {
                        assignments_data.push(resources[res]);
                }
                assignments_data.sort(function(a, b){
                    if(a.id < b.id) return -1;
                    if(a.id > b.id) return 1;
                    return 0;
                })
        }
}

function ganttcb() {
        let scenario = scenariomgr.getSelectedScenario();
        
        prepareSolution1(scenario);
        if (//false &&
                assignments_data != undefined) {

                showGantt('gantt_div', assignments_data, assignments_qty, config = {filters:["module", "project"]})        
        }
}
let ganttcfg = { 
        x: 2,
        y: 0,
        width: 10,
        height: 10,
        title: "Gantt chart",
        innerHTML: '<div id="gantt_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: ganttcb
}

scenariogrid.addCustomWidget('gantt', ganttcfg);

scenariogrid.addKPIsWidget(0, 10, 12, 5);



scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 15, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 15, 6, 4);

