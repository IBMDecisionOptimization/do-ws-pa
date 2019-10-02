
scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 3);
        
scenariogrid.addScoreWidget({mlkey:'ml-response', title:'Predict Response', x:0, y:3});
// scenariogrid.addScoreWidget({mlkey:'ml-offer', title:'Predict Offers', x:0, y:3});
//scenariogrid.addScoreWidget({mlkey:'ml-channel', title:'Predict Channel', x:0, y:5});

scenariogrid.addSolveWidget({x:0, y:5});

scenariogrid.addFlowWidget({x:0, y:7});

scenariogrid.addPAWidget(0, 9, 2, 3);
    
scenariogrid.addTablesWidget('Inputs', 'input', ['Customer', 'Offer', 'Channel', 'Probability', 'parameters'], 2, 0, 10, 5);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 2, 5, 10, 5);



         
        //       "kpis_chart": {
        //         "type": "kpis",
        //         "id": "kpis_chart",
        //         "title": "KPIs",
        //         "x": 2,
        //         "y": 0,
        //         "width": 10,
        //         "height": 5
        //       },
        //       "pa4": {
        //         "type" : "pa",
        //         "id": "pa4",
        //         "title": "Planning Analytics",
        //         "x": 0,
        //         "y": 4,
        //         "width": 2,
        //         "height": 2
        //       }