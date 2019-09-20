// <script src="https://d3js.org/d3.v4.min.js"></script>


scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget(0, 2, 2, 2);


// node type
// 2=dam, 5=station, 4=tank, 11=conector o 8=demand
function getNodeName(scenario, num) {
        let type = Math.trunc(num / 1000)
        let id = num % 1000;
        if (type == 2) {
                let dams = scenario.getTableRows('Dams');
                return dams[id].name;
        }
        if (type == 3) {
                let wells = scenario.getTableRows('Wells');
                return wells[id].name;
        }
        if (type == 5) {
                let stations = scenario.getTableRows('Stations');
                return stations[id].name;
        }
        if (type == 4) {
                let tanks = scenario.getTableRows('Tanks');
                return tanks[id].name;
        }
        if (type == 8) {
                return "Demand " + id;
        }
}
function getNodeType(scenario, num) {
        return Math.trunc(num / 1000)
}
function getNodeInFlow(scenario, num) {
        let ns  = scenario.getTableRows('Nodes');
        if (ns[num] == undefined) // BUG demand nodes mising ?
                return  0;
        return ns[num].inFlow;
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

        indexes = {};

        let links = scenario.getTableRows('Links');
        for (l in links) {
                let link = links[l];
                let flow = Math.trunc(link.outFlow);
                let fromNode = link.fromNode;
                let idxFromNode = indexes[fromNode];
                if (idxFromNode == undefined) { 
                        idxFromNode = Object.keys(indexes).length;
                        indexes[fromNode] = idxFromNode;
                        graph.nodes.push({ "node":idxFromNode, 
                                           "name": fromNode,
                                           "color": color(getNodeType(scenario, fromNode)),
                                           "title":  getNodeName(scenario, fromNode),
                                           "tooltip":  getNodeName(scenario, fromNode) + "\n" + format(getNodeInFlow(scenario, fromNode)) });
                }

                let toNode  = link.toNode;
                let idxToNode = indexes[toNode];
                if (idxToNode == undefined) { 
                        idxToNode = Object.keys(indexes).length;
                        indexes[toNode] = idxToNode;
                        graph.nodes.push({ "node":idxToNode, 
                                           "name": toNode,
                                           "color": color(getNodeType(scenario, toNode)),
                                           "title":  getNodeName(scenario, toNode),
                                           "tooltip":  getNodeName(scenario, toNode) + "\n" + format(getNodeInFlow(scenario, toNode)) });
                }
                graph.links.push({ "source": idxFromNode,
                                        "target": idxToNode,
                                        "value": flow,
                                        "nbOperations" : link.nbOperations,
                                        "color" : (link.nbOperations > 0 ) ? "red" : "green",
                                        "tooltip" :  link.name + "\n" + getNodeName(scenario, fromNode) + " → " + 
                                                getNodeName(scenario, toNode) + "\n" 
                                                + format(flow) + "\n"
                                                + link.nbOperations + " operations(s)"
                                        });
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
        height: 10,
        title: "Sankey chart",
        innerHTML: '<div id="sankey_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: sankeycb
}

scenariogrid.addCustomWidget('sankey', sankeycfg);



scenariogrid.addKPIsWidget(0, 10, 12, 5);



scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 15, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 15, 6, 4);


function barchart1cb() {
        // format variables
        var formatNumber = d3.format(",.0f"),    // zero decimal places
        format = function(d) { return formatNumber(d) + " hm3"; },
        // color = d3.scaleOrdinal(d3.schemeCategory20);
        color = d3.scale.category20();

        // BAR CHART
        let scenario = scenariomgr.getSelectedScenario();
        data = Object.values(scenario.tables['Nodes'].rows);
        data = data.map(function(d) { 
                return {
                        "x" : d.name, 
                        "y" :  parseFloat(d.outFlow), 
                        "color" : color(getNodeType(scenario, d.id)),
                        "tooltip" : d.name + ":\n" + parseFloat(d.outFlow) + " hm3"
                        };  
                });    
        d3chart("barchart1_div", data, {top: 20, right: 20, bottom: 30, left: 40, width: 700, height: 400});
}

function barchart2cb() {
        // format variables
        var formatNumber = d3.format(",.0f"),    // zero decimal places
        format = function(d) { return formatNumber(d) + " hm3"; },
        // color = d3.scaleOrdinal(d3.schemeCategory20);
        color = d3.scale.category20();
        
        let scenario = scenariomgr.getSelectedScenario();
        data2 = Object.values(scenario.tables['Links'].rows);
        data2 = data2.map(function(d) { 
                return {
                        "x" : d.name, 
                        "y" :  parseFloat(d.nbOperations), 
                        "color" : color(d.linkTypeId),
                        "tooltip" : d.name + ":\n" + parseFloat(d.outFlow) + " hm3\n" + d.nbOperations + " operations(s)"
                        };  
                });    
        d3chart("barchart2_div", data2, {top: 20, right: 20, bottom: 30, left: 40, width: 700, height: 400});
}




let barchart1cfg = { 
        x: 0,
        y: 20,
        width: 6,
        height: 6,        
        title: "Nodes chart",
        innerHTML: '<div id="barchart1_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: barchart1cb
}

scenariogrid.addCustomWidget('barchart1', barchart1cfg);


let barchart2cfg = { 
        x: 6,
        y: 20,
        width: 6,
        height: 6,         
        title: "Links chart",
        innerHTML: '<div id="barchart2_div" style="width:100%; height: calc(100% - 30px);"></div>',
        cb: barchart2cb
}

scenariogrid.addCustomWidget('barchart2', barchart2cfg);