scenariogrid.addTextWidget('step1', 'Introduction', 
        'This demo replicates older Nurse demo from Decision Optimization Center. <br>' +
        'It showcase how some hospital could plan the work of the nurses..<br>' +
        'Each day, nurses can work on different shift for different departments.<br>'+
        'Tables Nurses and Sfhits are set as editable.',
        0, 0, 12, 3,
        {background: "#ccdefc"})
        

        
scenariogrid.addTableWidget('Nurses', undefined, 0, 3, 4, 6);

scenariogrid.addTableWidget('Shifts', undefined, 4, 3, 4, 6);

scenariogrid.addTableWidget('Departments', undefined, 8, 3, 4, 3);

scenariogrid.addTableWidget('Skills', undefined, 8, 6, 4, 3);
        

    

scenariogrid.addTextWidget('step2', 'Optimization', 
        'You can create different scenarios to optimize.<br>' +
        'Many other inputs can be modified on different scenarios. <br>',
        0, 9, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addScenarioWidget(onChangeScenario, 0, 11, 2, 3);
        
scenariogrid.addSolveWidget({x:0, y:14});

scenariogrid.addTablesWidget('Inputs', 'input', ['NurseVacations', 'SkillsRequirements', 'NurseSkills', 'NurseAssociations', 'NurseIncompatibilities'], 2, 11, 10, 6);



scenariogrid.addTextWidget('step3', 'Solution', 
        'You can see the solution in the following views.<br>',
        0, 17, 12, 2,
        {background: "#ccdefc"})



let cfg3 = {"mark":"rect","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_day","type":"nominal","axis":{"title":"Day"}},"color":{"field":"shift_department","type":"nominal","legend":{"title":"Department"}}}}


scenariogrid.addTextWidget('notevega3', 'Assignments per Department and Day', 
        'You can see in this view the assignemnts for each nurse, department and day.<br>',
        0, 19, 2, 5,
        {background: "#e7eefe"})

scenariogrid.addVegaWidget('vega3', 'Assignments per Department and Day', '', 'shift_assignments', cfg3, 2, 19, 10, 5);

scenariogrid.addTextWidget('notevega2', 'Split per Department', 
        'You can see in this view the assignemnts duration for each nurse, split per departmenr.<br>',
        0, 24, 2, 5,
        {background: "#e7eefe"})

        
let cfg2 = {"mark":"bar","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_duration","type":"quantitative","aggregate":"sum","axis":{"title":"Duration"}},"color":{"field":"shift_department","type":"nominal","legend":{"title":"Department"}}}}

scenariogrid.addVegaWidget('vega2', 'Assignments', '', 'shift_assignments', cfg2, 2, 24, 10, 5);

scenariogrid.addTextWidget('notevega1', 'Split per Day', 
        'You can see in this view the assignemnts duration for each nurse, split per day.<br>',
        0, 29, 2, 5,
        {background: "#e7eefe"})

let cfg1 = {"mark":"bar","encoding":{"x":{"field":"nurse_name","type":"nominal","axis":{"title":"Nurse"}},"y":{"field":"shift_duration","type":"quantitative","aggregate":"sum","axis":{"title":"Duration"}},"color":{"field":"shift_day","type":"nominal","legend":{"title":"Day"}}}}

scenariogrid.addVegaWidget('vega1', 'Assignments', '', 'shift_assignments', cfg1, 2, 29, 10, 5);




scenariogrid.addTextWidget('step4', 'Multi-Scenario Comparison', 
        'Finaly, you can compare KPIs over different scenarios.<br>',
        0, 34, 12, 2,
        {background: "#ccdefc"})



scenariogrid.addKPIsWidget(0, 36, 12, 5);

