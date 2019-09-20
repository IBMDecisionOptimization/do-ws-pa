scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget(0, 2, 2, 2);

scenariogrid.addKPIsWidget(2, 0, 10, 5);

let cfg1 = {"width":900,"height":200,"mark":"bar","encoding":{"x":{"field":"day","type":"nominal","sort":[]},"y":{"field":"quantity","type":"quantitative","aggregate":"sum"},"color":{"field":"item","type":"nominal"}}}


scenariogrid.addVegaWidget('vega1', 'Stocks', 'stock', cfg1, 2, 0, 10, 5);

let cfg2 = {"width":900,"height":200,"mark":"bar","encoding":{"x":{"field":"day","type":"nominal","sort":[]},"y":{"field":"quantity","type":"quantitative","aggregate":"sum"},"color":{"field":"item","type":"nominal"}}}

scenariogrid.addVegaWidget('vega2', 'Orders', 'order', cfg2, 2, 0, 10, 5);

let cfg3 = {"width":900,"height":200,"mark":"bar","encoding":{"x":{"field":"day","type":"nominal","sort":[]},"y":{"field":"cost","type":"quantitative","aggregate":"sum"},"color":{"field":"type","type":"nominal"}}}

scenariogrid.addVegaWidget('vega3', 'Costs', 'costs', cfg3, 2, 0, 10, 5);
