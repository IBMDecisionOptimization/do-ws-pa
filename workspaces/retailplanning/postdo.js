
// selected + candidate to  
// 
// cost and revenue

let scenario = scenariomgr.getSelectedScenario(); 

let cost_cols = ['CustomerID', 'OfferID', 'ChannelID', 'cost'];

let costs = scenario.addTable('cost', 'output', cost_cols, {});

let revenue_cols = ['CustomerID', 'OfferID', 'ChannelID', 'expectedrevenue'];

let revenues = scenario.addTable('expectedrevenue', 'output', revenue_cols, {});

let candidates = scenario.getTableRows('Candidate');
let selecteds = scenario.getTableRows('selected');

for (let i in candidates) {
    let candidate = candidates[i];
    let selected = selecteds[i];
    
    if (selected['selected'] == 0)
        continue;

    let cost_row = {}
    cost_row['CustomerID'] = selected['CustomerID'];
    cost_row['OfferID'] = selected['OfferID']
    cost_row['ChannelID'] = selected['ChannelID'];
    cost_row['cost'] = candidate['Cost'];
    
    scenario.addRowToTable('cost', i, cost_row);    

    let revenue_row = {}
    revenue_row['CustomerID'] = selected['CustomerID'];
    revenue_row['OfferID'] = selected['OfferID']
    revenue_row['ChannelID'] = selected['ChannelID'];
    revenue_row['expectedrevenue'] = candidate['ExpectedRevenue'];
    
    scenario.addRowToTable('expectedrevenue', i, revenue_row);  
}

