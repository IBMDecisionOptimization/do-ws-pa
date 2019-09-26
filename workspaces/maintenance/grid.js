
        
scenariogrid.addTextWidget('step1', 'Introduction', 
        'This demo shows combination of ML and DO techniques for predictive Maintenance. <br>' +
        'First, select a scenario to work with.<br>' +
        'The scenario contains machine descriptions along with the planned production of these machines.',
        0, 0, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addScenarioWidget(onChangeScenario, 0, 2, 2, 3);

scenariogrid.addTableWidget('machine', undefined, 2, 2, 10, 3)



function heatmap1cb() {
        let scenario = scenariomgr.getSelectedScenario();

        let data1 = {}
        let inputs = scenario.getTableRows('planned_production');
        for (l in inputs) {
                let input = inputs[l];
                let outcome = parseInt(input.production);

                let x = input.day;
                let y = input.machine;

                if (x in data1) {
                        if (y in data1[x])
                                data1[x][y] = data1[x][y] + outcome;
                        else
                                data1[x][y] =  outcome;
                } else {
                        data1[x] = {};
                        data1[x][y] = outcome;
                }
        }
        let data = []
        for (x in data1)
                for (y in data1[x])
                        data.push({
                                x:x, 
                                y:y, 
                                value:data1[x][y],
                                tooltip: x + '-' + y + ': ' + data1[x][y]
                        });

        let div = document.getElementById('heatmap1_div');

        let config = {
                width: div.parentNode.clientWidth-30,
                height: div.parentNode.clientHeight-30,
                top: 120, right: 50, bottom: 20, left: 110
                }
        d3heatmap('heatmap1_div', data, config)
}


let heatmap1cfg = { 
        x: 2,
        y: 5,
        width: 10,
        height: 6,
        title: "Planned Production",
        innerHTML: '<div id="heatmap1_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: heatmap1cb
}

scenariogrid.addCustomWidget('Planned Production',  heatmap1cfg);


scenariogrid.addTextWidget('step2', 'Predicting Failures', 
        'Then call SCORE to predict the moment when the machine may fail.<br>'+
        'The Machine Learning model will return predictions, as shown in the chart below, of when the machine will most probably fail.<br>',
        0, 11, 12, 2,
        {background: "#d7fccc"})


        
function failurecb() {
    let scenario = scenariomgr.getSelectedScenario();

    let color = d3.scale.category20c();

    let failure = scenario.getTableRows('predicted_failure');
    let values = {}

    let periods = []
    for (let o in failure) {
            let p = failure[o].day;
            let x = periods.indexOf(p);
            if (x == -1) {
                    periods.push(p);
                    x = periods.indexOf(p);
            }
            y = parseFloat(failure[o].failure);
            let machine  = failure[o].machine;                
            if (!(machine in values))
                    values[machine] = [];
            values[machine].push({x:x, y:y});
    }
    
    let data = []
    let machines = []  

    for (u in values) {
        machines.push(u);
        let machineidx = machines.indexOf(u);
        d = {
                values:values[u],
                key:u,
                color: color(machineidx)
        };
        data.push(d)
    }

    nvd3chart('failure_div', data)

}

let failurecfg = { 
    x: 2,
    y: 13,
    width: 10,
    height: 5,
    title: "Failure chart",
    innerHTML: '<div id="failure_div" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
    cb: failurecb
}

scenariogrid.addCustomWidget('failure', failurecfg);

scenariogrid.addScoreWidget({x:0, y:16});





scenariogrid.addTextWidget('step3', 'Optimizaing Maintenance Plan', 
        'Then, in order to plan the maintenance, you need to define the parameters such as the maintenance crew size and call SOLVE to create the maintenance plan.<br>' +
        'The Decision Optimization model will return a plan of when each machine is maintained, as shown in the chart below.<br>' +
        'Also, the actual production, taking into account the maintenance is represented.<br>',
        0, 18, 12, 2,
        {background: "#fceccc"})



scenariogrid.addTableWidget('parameters', undefined, 0, 20, 2, 3)

scenariogrid.addSolveWidget({x:0, y:23});

function heatmap3cb() {
    let scenario = scenariomgr.getSelectedScenario();
    
    let data = []
    let maintenances = scenario.getTableRows('maintenance');
    for (l in maintenances) {
        let maintenance = maintenances[l];
        data.push({
                x:maintenance.day, 
                y:maintenance.machine, 
                value:maintenance.maintenance,
                tooltip: (maintenance.maintenance == 1) ? 'Maintenance' : ""
        });

    }

    let div = document.getElementById('heatmap3_div');

    let config = {
            width: div.parentNode.clientWidth-30,
            height: div.parentNode.clientHeight-30,
            top: 120, right: 50, bottom: 20, left: 110
            }
    d3heatmap('heatmap3_div', data, config)
}


let heatmap3cfg = { 
    x: 2,
    y: 20,
    width: 10,
    height: 6,
    title: "Maintenance",
    innerHTML: '<div id="heatmap3_div" style="width:100%; height: calc(100% - 30px);"></div>',
    cb: heatmap3cb
}

scenariogrid.addCustomWidget('Maintenance',  heatmap3cfg);




function heatmap2cb() {
    let scenario = scenariomgr.getSelectedScenario();
    
    let data1 = {}
    let inputs = scenario.getTableRows('production');
    for (l in inputs) {
            let input = inputs[l];
            let outcome = parseInt(input.production);

            let x = input.day;
            let y = input.machine;

            if (x in data1) {
                    if (y in data1[x])
                            data1[x][y] = data1[x][y] + outcome;
                    else
                            data1[x][y] =  outcome;
            } else {
                    data1[x] = {};
                    data1[x][y] = outcome;
            }
    }
    let data = []
    for (x in data1)
            for (y in data1[x])
                    data.push({
                            x:x, 
                            y:y, 
                            value:data1[x][y],
                            tooltip: x + '-' + y + ': ' + data1[x][y]
                    });

    let div = document.getElementById('heatmap2_div');

    let config = {
            width: div.parentNode.clientWidth-30,
            height: div.parentNode.clientHeight-30,
            top: 120, right: 50, bottom: 20, left: 110
            }
    d3heatmap('heatmap2_div', data, config)
}


let heatmap2cfg = { 
    x: 2,
    y: 26,
    width: 10,
    height: 6,
    title: "Production",
    innerHTML: '<div id="heatmap2_div" style="width:100%; height: calc(100% - 30px);"></div>',
    cb: heatmap2cb
}

scenariogrid.addCustomWidget('Production',  heatmap2cfg);




scenariogrid.addTextWidget('step4', 'Multi Scenario Comparison', 
        'Finally a KPI view allows omparison between different plans.',
        0, 32, 12, 2,
        {background:"#fccccc"})

scenariogrid.addKPIsWidget(0, 34, 12, 5);


// scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 11, 6, 4);

// scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 11, 6, 4);


