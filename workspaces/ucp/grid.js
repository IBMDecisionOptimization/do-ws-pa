

scenariogrid.addTextWidget('step1', 'Introduction', 
        'This demo replicates older Unit Cmmitment Problemm (UCP) demo from Decision Optimization Center(DOC). <br>' +
        'It prescibres how to generate electricity using different <b>Units</b> based on a predicted <b>load</b>.<br>' +
        'The input is the set of <b>Units</b> with some <b>Maintenances</b> and a <b>demand</b>.',
        0, 0, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addTableWidget('Units', undefined, 0, 2, 4, 4);

scenariogrid.addTableWidget('UnitMaintenances', undefined, 4, 2, 4, 4);

scenariogrid.addTableWidget('Loads', undefined, 8, 2, 4, 4);

scenariogrid.addTextWidget('step1b', 'Load', 
        'The load can be representedusing a dedicated chart.<br>' +
        '. <br>',
        0, 6, 3, 2,
        {background: "#ccdefc"})

function nvd3cbdemand() {
    let scenario = scenariomgr.getSelectedScenario();

    let load = scenario.tables['Loads'].rows;
    let values = {load:[]}

    let periods = []
    for (o in load) {
            p = load[o].Periods;
            x = periods.indexOf(p);
            if (x == -1) {
                    periods.push(p);
                    x = periods.indexOf(p);
            }
            y = parseFloat(load[o].value);
            values['load'].push({x:x, y:y});
    }
    let data = []
    let units = []  

    for (u in values) {
            d = {
                    values:values[u],
                    key:u
            };
            data.push(d)
    }

    nvd3chart('demand_chart', data)

}

let demandcfg = { 
        x: 3,
        y: 6,
        width: 9,
        height: 5,
        title: "Demand chart",
        innerHTML: '<div id="demand_chart" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: nvd3cbdemand
}

scenariogrid.addCustomWidget('demand_chart', demandcfg);

scenariogrid.addTextWidget('step2', 'Optimization', 
        'You can create different scenarios to optimize.<br>' +
        'In the parameter view, you can set parameters such as the minimal and maximla number of distribution centers to open. <br>',
        0, 11, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addScenarioWidget(onChangeScenario, 0, 13, 2, 3);
        
scenariogrid.addSolveWidget({x:0, y:16});

scenariogrid.addTableWidget('Weights', undefined, 2, 13, 5, 6);

scenariogrid.addTableWidget('kpis', undefined, 7, 13, 5, 6);




scenariogrid.addTextWidget('step3', 'Solution', 
        'You can see the solution in the following views.<br>' +
        'Different customer views are used. <br>',
        0, 19, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 0, 21, 3, 6);


function nvd3cb() {
    let scenario = scenariomgr.getSelectedScenario();

    let colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

    let production = scenario.tables['production'].rows;
    let values = {}

    let periods = []
    for (o in production) {
            p = production[o].Periods;
            x = periods.indexOf(p);
            if (x == -1) {
                    periods.push(p);
                    x = periods.indexOf(p);
            }
            y = parseFloat(production[o].value);
            unit = production[o].Units;                
            if (!(unit in values))
                    values[unit] = [];
            values[unit].push({x:x, y:y});
    }
    let data = []
    let units = []  

    for (u in values) {
            units.push(u);
            unitsidx = units.indexOf(u);
            d = {
                    values:values[u],
                    key:u,
                    color: colors[unitsidx]
            };
            data.push(d)
    }

    nvd3chart('chart', data)

}


let chartcfg = { 
        x: 3,
        y: 21,
        width: 9,
        height: 5,
        title: "Production chart",
        innerHTML: '<div id="chart" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: nvd3cb
}


scenariogrid.addCustomWidget('chart', chartcfg);

function vegacb() {
    let scenario = scenariomgr.getSelectedScenario();

    periods = []
    rows = scenario.tables['Periods'].rows
    for (r in rows)
            periods.push(rows[r].Id)
    let vegadiv = document.getElementById('vega_div');
    let vw = vegadiv.parentNode.clientWidth-200;
    let vh = vegadiv.parentNode.clientHeight-50;
    vegaconfig = {
            "width" : vw,
            "height" : vh,
            "mark" : "bar",
            "encoding": {
                    "x": {
                            "field": "Periods",
                            "type": "nominal",
                            "scale": {
                                    "domain": periods
                            },
                            "axis": {
                                    "labels": false
                            }
                    },
                    "y": {
                            "field": "value",
                            "type": "quantitative",
                            "aggregate": "sum"
                    },
                    "color": {
                            "field": "Units",
                            "type": "nominal"
                    }
            }
    }
    vegalitechart("vega_div", scenario.tables['production'], vegaconfig)
}



let vegacfg = { 
        x: 3,
        y: 26,
        width: 9,
        height: 5,
        title: "Vega lite test",
        innerHTML: '<div style="width:100%; height: calc(100% - 30px);"> <div id="vega_div" ></div></div>',
        cb: vegacb
}

scenariogrid.addCustomWidget('vega', vegacfg);



function ganttcb() {
    let scenario = scenariomgr.getSelectedScenario();

    let periods_rows = scenario.tables['Periods'].rows;
    let periods = []
    for (let p in periods_rows)
            periods.push(periods_rows[p].Id);

    let units_rows = scenario.tables['Units'].rows;
    let units = []          
    for (let u in units_rows)
            units.push(units_rows[u].Units);
            

    let production = scenario.tables['production'].rows;

    let assignments = {};
    let assignments_data = [];
    let assignments_qty = [];        
    let now = new Date('01/14/2019').getTime()

    assignments['ALL'] = {
            "id" : "ALL",
            "name" : "ALL",
            "activities" : [ ],
            "parent" : ""

    }
    for (u in units) {
            unit = units[u];
            if (assignments[unit] == undefined) {      
                    unit_type = unit.split('_')[0]; 
                    if (assignments[unit_type] == undefined) {  
                            assignments[unit_type] = {
                                    "id" : unit_type,
                                    "name" : unit_type,
                                    "activities" : [ ],
                                    "parent" : "ALL"
            
                            }   
                    }               
                    assignments[unit] = {
                            "id" : unit,
                            "name" : unit,
                            "activities" : [ ],
                            "parent" : unit_type
    
                    }
            }
    }
    for (o in production) {
            p = production[o].Periods;
            x = periods.indexOf(p);
            y = parseFloat(production[o].value);
            unit = production[o].Units;                
            if (y > 0) {
                    if (assignments_qty[unit] == undefined)
                            assignments_qty[unit] = []                        
                    taskid = unit + '-' + p;
                    assignments_qty[unit][taskid] = 1;
                    unit_type = unit.split('_')[0]; 
                    activity = { 
                            "id": taskid,
                            "name": taskid,
                            "start": (now + 60*60*1000*x),
                            "end": (now + 60*60*1000*(x+1)),
                            "unit-type": unit_type
                    };                        
                    assignments[unit].activities.push(activity);
            }
    }
    for (o in assignments)
            assignments_data.push(assignments[o]);

    showGantt('gantt_div', assignments_data, assignments_qty, {color:"unit-type", filters:["unit-type"]})        

}





let ganttcfg = { 
        x: 3,
        y: 31,
        width: 9,
        height: 5,
        title: "Production Gantt chart",
        innerHTML: '<div id="gantt_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: ganttcb
}

scenariogrid.addCustomWidget('gantt', ganttcfg);


scenariogrid.addTextWidget('step4', 'Multiple Scenarios', 
        'You can see also compare KPIs form the multiple scenarios.<br>',
        0, 36, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addKPIsWidget(0, 38, 12, 5);



scenariogrid.addTextWidget('pa4', 'Planning Analytics', 
        'You can then connect your prototype appliction to Planning Analytics.<br>',
        0, 43, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addPAWidget(0, 45, 12, 2);

