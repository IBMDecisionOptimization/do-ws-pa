
scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 3);

scenariogrid.addKPIsWidget(0, 6, 12, 5);


scenariogrid.addSolveWidget(0, 3);

scenariogrid.addPAWidget(0, 5);

scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 8, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 8, 6, 4);

let plants = []
function getPlantType(plant) {
        let idx = plants.indexOf(plant);
        if (idx < 0)
                plants.push(plant)
        return plants.indexOf(plant);
}

let products = []
function getProductType(product) {
        let idx = products.indexOf(product);
        if (idx < 0)
                products.push(product)
        return products.indexOf(product);
}

function sankeycb() {
        
    let scenario = scenariomgr.getSelectedScenario();

    // SANKEY

    // format variables
    var formatNumber = d3.format(",.0f"),    // zero decimal places
    format = function(d) { return formatNumber(d) + " hm3"; },
    // color = d3.scaleOrdinal(d3.schemeCategory20);
    color = d3.scale.category20();

    //set up graph in same style as original example but empty
    graph = {"nodes" : [], "links" : []};

    let flows = {};

    let productions = scenario.getTableRows('production');
    for (l in productions) {
        let production = productions[l];
        let flow = Math.trunc(production.value);
        let fromNode = production.Plants;
        let toNode = production.Months; // errorin data
        if (fromNode in flows) {
                if (toNode in flows[fromNode])
                        flows[fromNode][toNode] = flows[fromNode][toNode] + flow;
                else
                        flows[fromNode][toNode] =  flow;
        } else {
                flows[fromNode] = {};
                flows[fromNode][toNode] = flow;
        }

    }


    indexes = {};

    for (fromNode in flows) {
            for (toNode in flows[fromNode]) {
                let flow = flows[fromNode][toNode];
                let idxFromNode = indexes[fromNode];
                if (idxFromNode == undefined) { 
                        idxFromNode = Object.keys(indexes).length;
                        indexes[fromNode] = idxFromNode;
                        graph.nodes.push({ "node":idxFromNode, 
                                        "name": fromNode,
                                        "color": color(getPlantType(fromNode)),
                                        "title":  fromNode,
                                        "tooltip":  "Plant: " + fromNode
                                        });
                }

                let idxToNode = indexes[toNode];
                if (idxToNode == undefined) { 
                        idxToNode = Object.keys(indexes).length;
                        indexes[toNode] = idxToNode;
                        graph.nodes.push({ "node":idxToNode, 
                                        "name": toNode,
                                        "color": color(getProductType(toNode)),
                                        "title":  toNode,
                                        "tooltip":  "Product: " + toNode
                                        });
                }
                graph.links.push({ "source": idxFromNode,
                                        "target": idxToNode,
                                        "value": flow,
                                        //"nbOperations" : link.nbOperations,
                                        "color" : color(getProductType(toNode)),
                                        "tooltip" :   "Plant: " + fromNode + " to Product: " + toNode + " : " + flow 
                                        });
        }
    };

    let div = document.getElementById('sankey_div');

    let vw = div.parentNode.clientWidth-50;
    let vh = div.parentNode.clientHeight-50;

    d3sankey("sankey_div", graph, {top: 10, right: 10, bottom: 10, left: 10, width:vw  , height: vh});

}



let sankeycfg = { 
    x: 2,
    y: 0,
    width: 10,
    height: 6,
    title: "Production chart",
    innerHTML: '<div id="sankey_div" style="width:100%; height: calc(100% - 30px);"></div>',
    cb: sankeycb
}

scenariogrid.addCustomWidget('sankey', sankeycfg);


             


function treecb() {

        let scenario = scenariomgr.getSelectedScenario();

        let flows = {};

        let productions = scenario.getTableRows('production');
        for (l in productions) {
                let production = productions[l];
                let flow = Math.trunc(production.value);
                let fromNode = production.Plants;
                let toNode = production.Months; // errorin data
                if (fromNode in flows) {
                        if (toNode in flows[fromNode])
                                flows[fromNode][toNode] = flows[fromNode][toNode] + flow;
                        else
                                flows[fromNode][toNode] =  flow;
                } else {
                        flows[fromNode] = {};
                        flows[fromNode][toNode] = flow;
                }

        }

        data = {name: "production", children : []}
        for (fromNode in flows) {
                let children = {name:fromNode, children:[]}
                for (toNode in flows[fromNode]) {
                        let gchildren = {
                                name:toNode, 
                                value:flows[fromNode][toNode],
                                tooltip: fromNode +" produces " + flows[fromNode][toNode] + " units of " + toNode
                        }
                        children.children.push(gchildren)
                }
                data.children.push(children)
        }        
            
        let div = document.getElementById('tree_div');

        let config = {
                width:  div.parentNode.clientWidth-50,
                height: div.parentNode.clientHeight-50
        }
        d3treemap('tree_div', data, config)
}




let treecfg = { 
        x: 2,
        y: 0,
        width: 10,
        height: 6,
        title: "Production TreeMap",
        innerHTML: '<div id="tree_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: treecb
}
        
scenariogrid.addCustomWidget('tree', treecfg);