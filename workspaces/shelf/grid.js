
scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget({x:0, y:2});


let vegaconfig = {
    "mark":"rect",
    "encoding":{
        "x":{
            "field":"offset",
            "type":"quantitative",
            "title":"Position"
        },
        "x2":{
            "field":"offset2",
            "type":"quantitative"
        },
        "y":{
            "field":"shelf",
            "type":"nominal",
            "title":"Shelfs"
        },
        "tooltip":{
            "field":"sku",
            "type":"nominal"
        },
        "color":{
            "field":"parentGrp",
            "type":"nominal",
            "legend":{
                "title":"Groups"
            }
        }
    }
}

scenariogrid.addVegaWidget('shelfvega', 'Shelf', '', 'SKUOnShelfPlacement', vegaconfig, 2, 0, 10, 6);


scenariogrid.addKPIsWidget(0, 6, 12, 5);



scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 11, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 11, 6, 4);

