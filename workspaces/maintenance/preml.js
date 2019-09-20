

let scenario = scenariomgr.getSelectedScenario(); 

let machines = scenario.getTableRows('machine');

let days = scenario.getTableRows('day');

let cols = ['id', 'life']
for (let d in days)
    cols.push(d);

let inputml = scenario.addTable('inputml', 'input', cols, {'id':'id'});

let planned_productions = scenario.getTableRows('planned_production');
let data ={}
for (let r in planned_productions) {
    let planned_production = planned_productions[r];
    let m = planned_production.machine;
    if (!(m in data)) 
        data[m] = {}
    let d = planned_production.day;
    data[m][d] = planned_production.production;
}

for (let m in machines) {
    let machine = machines[m];
    let row = {}
    row.id = machine.id;
    row.life = machine['remaining life'];
    for (let d in days)
        row[d] = data[machine.id][d];
    scenario.addRowToTable('inputml', row.id, row);
}
