 // scenariogrid.addScenarioListWidget(onChangeScenario, 0, 0, 12, 4);
// scenariogrid.addScenarioChartWidget(onChangeScenario, 0, 0, 12, 6);


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

    showGantt('gantt_div', assignments_data, assignments_qty, config = {color:"unit-type", filters:["unit-type"]})        

}


scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);

scenariogrid.addKPIsWidget(0, 18, 12, 6);

scenariogrid.addSolveWidget(0, 2);

scenariogrid.addTableWidget('Weights', scenariocfg.Weights, 0, 5, 6, 3);

scenariogrid.addTableWidget('kpis', scenariocfg.kpis, 6, 5, 6, 3);

scenariogrid.addTablesWidget('Inputs', 'input', ['Units', 'Loads', 'UnitMaintenances'], 0, 8, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', ['production', 'started', 'used'], 6, 8, 6, 4);

let demandcfg = { 
        x: 0,
        y: 12,
        width: 12,
        height: 6,
        title: "Demand chart",
        innerHTML: '<div id="demand_chart" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: nvd3cbdemand
}

scenariogrid.addCustomWidget('demand_chart', demandcfg);


let chartcfg = { 
        x: 2,
        y: 0,
        width: 10,
        height: 5,
        title: "Production chart",
        innerHTML: '<div id="chart" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: nvd3cb
}

scenariogrid.addCustomWidget('chart', chartcfg);


let vegacfg = { 
        x: 0,
        y: 24,
        width: 12,
        height: 6,
        title: "Vega lite test",
        innerHTML: '<div style="width:100%; height: calc(100% - 30px);"> <div id="vega_div" ></div></div>',
        cb: vegacb
}

scenariogrid.addCustomWidget('vega', vegacfg);

let ganttcfg = { 
        x: 0,
        y: 30,
        width: 12,
        height: 6,
        title: "Production Gantt chart",
        innerHTML: '<div id="gantt_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: ganttcb
}

scenariogrid.addCustomWidget('gantt', ganttcfg);
