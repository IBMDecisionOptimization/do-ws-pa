scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget(0, 2, 2, 2);


let cfg3 = {"mark":"rect","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_day","type":"nominal","axis":{"title":"Day"}},"color":{"field":"shift_department","type":"nominal","legend":{"title":"Department"}}}}

let cfg2 = {"mark":"bar","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_duration","type":"quantitative","axis":{"title":"Duration"}},"color":{"field":"shift_department","type":"nominal","legend":{"title":"Department"}}}}

let cfg1 = {"mark":"bar","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_duration","type":"quantitative","aggregate":"sum","axis":{"title":"Duration"}},"color":{"field":"shift_day","type":"nominal","legend":{"title":"Day"}}}}

scenariogrid.addVegaWidget('vega3', 'Assignments', 'shift_assignments', cfg3, 2, 0, 10, 5);
scenariogrid.addVegaWidget('vega2', 'Assignments', 'shift_assignments', cfg2, 0, 5, 12, 5);
scenariogrid.addVegaWidget('vega1', 'Assignments', 'shift_assignments', cfg1, 0, 10, 12, 5);

scenariogrid.addKPIsWidget(0, 15, 12, 5);



scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 20, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 20, 6, 4);
