scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget(0, 2, 2, 2);



let cfg5 = {

    "transform": [
        {
            "lookup": "map id",
            "from": {
              "data": {
                "url": "https://raw.githubusercontent.com/d3/d3-geo/master/test/data/us-10m.json",
                "format": {
                  "type": "topojson",
                  "feature": "states"
                }
              },
              "key": "id"
            },
            "as": "geo"
          }
      ,
      {
        "calculate": "datum.state  + ' / ' + datum.customers",
        "as": "mytooltip"
      }
    ],
    "projection": {
      "type": "albersUsa"
    },
    "mark": "geoshape",
    "encoding": {
      "shape": {
        "field": "geo",
        "type": "geojson"
      },
      "color": {
        "field": "customers",
        "type": "quantitative"
      }
      ,
      "tooltip": {
        "field": "mytooltip",
        "type": ""
      }
    }
  }

  scenariogrid.addVegaWidget('vega5', 'Customers per State', '', 'state', cfg5, 2, 0, 5, 5);


  let cfg4 = {

    "transform": [
        {
            "lookup": "state map id",
            "from": {
              "data": {
                "url": "https://raw.githubusercontent.com/d3/d3-geo/master/test/data/us-10m.json",
                "format": {
                  "type": "topojson",
                  "feature": "states"
                }
              },
              "key": "id"
            },
            "as": "geo"
          }
      ,
      {
        "calculate": "datum.salesrep  + ' / ' + datum.state",
        "as": "mytooltip"
      }
    ],
    "projection": {
      "type": "albersUsa"
    },
    "mark": "geoshape",
    "encoding": {
      "shape": {
        "field": "geo",
        "type": "geojson"
      },
      "color": {
        "field": "salesrep",
        "type": ""
      }
      ,
      "tooltip": {
        "field": "mytooltip",
        "type": ""
      }
    }
  }

  scenariogrid.addVegaWidget('vega4', 'Assignments', '', 'salesrep_to_state_assignment_report', cfg4, 7, 0, 5, 5);



let cfg1 = {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "state",
        "type": "nominal"
      },
      "y": {
        "field": "salesrep",
        "type": "nominal"
      },
      "color": {
        "field": "salesrep",
        "type": "nominal"
      }
    },
    "config": {
      "overlay": {
        "line": true
      },
      "scale": {
        "useUnaggregatedDomain": true
      }
    }

}
scenariogrid.addVegaWidget('vega1', 'Assignments', '', 'salesrep_to_state_assignment_report', cfg1, 0, 5, 12, 5);

let cfg2 = {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "salesrep",
        "type": "nominal"
      },
      "y": {
        "field": "state customers",
        "type": "quantitative",
        "aggregate": "sum"
      },
      "color": {
        "field": "state",
        "type": "nominal"
      },
      "tooltip": {
        "field": "state",
        "type": "nominal"
      }
    },
    "config": {
      "overlay": {
        "line": true
      },
      "scale": {
        "useUnaggregatedDomain": true
      }
    },
    "width": 500
  }

scenariogrid.addVegaWidget('vega2', 'Assignments', '', 'salesrep_to_state_assignment_report', cfg2, 0, 10, 12, 5);

let cfg3 = {
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "salesrep",
        "type": "nominal"
      },
      "y": {
        "field": "homedistance value",
        "type": "quantitative"
      },
      "color": {
        "field": "state",
        "type": "nominal"
      },
      "tooltip": {
        "field": "state",
        "type": "nominal"
      }
    },
    "config": {
      "overlay": {
        "line": true
      },
      "scale": {
        "useUnaggregatedDomain": true
      }
    },
    "width": 300,
    "height": 500
  }

scenariogrid.addVegaWidget('vega3', 'Assignments', '', 'salesrep_to_state_assignment_report', cfg3, 0, 15, 12, 5);

  
scenariogrid.addKPIsWidget(0, 20, 12, 5);

scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 25, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 25, 6, 4);
