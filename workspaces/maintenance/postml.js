

let scenario = scenariomgr.getSelectedScenario(); 

let machines = scenario.getTableRows('machine');

let days = scenario.getTableRows('day');
let predictions = scenario.getTableRows('predictions');

scenario.removeAllRowsFromTable('predicted_failure');

let idx = 0;
for (let machine in machines) {
    let mid = predictions[machine].value;
    let tmid = Math.trunc(mid);
    let d = 0;
    for (let day in days) {

        let val = 0;            
        if (tmid==(d+1)) {
                let r = mid - tmid;
                val = Math.round((100-100*r));
        }                                                
        if ((1+tmid)==(d+1)) {
                let r = mid - tmid;
                val = Math.round(100*r);
        }
        let row = {
            machine: machine,
            day: day,
            failure : val
        }
        
        scenario.addRowToTable('predicted_failure', idx, row);

        idx +=1;
        d += 1;

    }  

}
