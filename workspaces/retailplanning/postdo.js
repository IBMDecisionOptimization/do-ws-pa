
// selected + candidate to  
// 
// cost and revenue

let scenario = scenariomgr.getSelectedScenario(); 

let cost_cols = ['CustomerID', 'OfferID', 'ChannelID', 'cost'];

let costs = scenario.addTable('cost', 'output', cost_cols, {});

let revenue_cols = ['CustomerID', 'OfferID', 'ChannelID', 'expectedrevenue'];

let revenues = scenario.addTable('expectedrevenue', 'output', revenue_cols, {});

let candidates = scenario.getTableRows('Candidate');

let mycandidates = {}

for (let i in candidates) {
    let candidate = candidates[i];
    let customer = candidate['CustomerID'];
    let offer =  candidate['OfferID']
    let channel = candidate['ChannelID'];
    if (!(customer in mycandidates))
        mycandidates[customer] = {}
    if (!(offer in mycandidates[customer]))
        mycandidates[customer][offer] = {}
    mycandidates[customer][offer][channel] = candidate;
}


let selecteds = scenario.getTableRows('selected');

let j = 0;
for (let i in candidates) {

    let selected = selecteds[i];
    
    if (selected['selected'] == 0)
        continue;

    let customer = selected['CustomerID'];
    let offer =  selected['OfferID']
    let channel = selected['ChannelID'];
    let candidate = mycandidates[customer][offer][channel];
    
    let cost_row = {}
    cost_row['CustomerID'] = selected['CustomerID'];
    cost_row['OfferID'] = selected['OfferID']
    cost_row['ChannelID'] = selected['ChannelID'];
    cost_row['cost'] = candidate['Cost'];
    
    scenario.addRowToTable('cost', j, cost_row);    

    let revenue_row = {}
    revenue_row['CustomerID'] = selected['CustomerID'];
    revenue_row['OfferID'] = selected['OfferID']
    revenue_row['ChannelID'] = selected['ChannelID'];
    revenue_row['expectedrevenue'] = candidate['ExpectedRevenue'];
    
    scenario.addRowToTable('expectedrevenue', j, revenue_row);  
    j += 1;
}

