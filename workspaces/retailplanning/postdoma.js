
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

// Build selected table
let candidate_sols = scenario.getTableRows('list_of_Candidate_solution')

let selecteds_cols = ['CustomerID', 'OfferID', 'ChannelID', 'selected'];
scenario.addTable('selected', 'output', selecteds_cols, {});

for (let i in candidate_sols) {
    let candidate_sol = candidate_sols[i]; 
    let idx  = candidate_sol['id_of_Candidate'];
    let value = candidate_sol['selectionVar']

    let candidate = candidates[idx];

    let customer = candidate['CustomerID'];
    let offer =  candidate['OfferID']
    let channel = candidate['ChannelID'];

    let selected_row = {}
    selected_row['CustomerID'] = customer
    selected_row['OfferID'] = offer
    selected_row['ChannelID'] = channel
    selected_row['selected'] = value;
    
    scenario.addRowToTable('selected', idx, selected_row);  
}

// Build cost and expected revenue table
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
    cost_row['CustomerID'] = customer
    cost_row['OfferID'] = offer
    cost_row['ChannelID'] = channel
    cost_row['cost'] = candidate['Cost'];
    
    scenario.addRowToTable('cost', j, cost_row);    

    let revenue_row = {}
    revenue_row['CustomerID'] = customer
    revenue_row['OfferID'] = offer
    revenue_row['ChannelID'] = channel
    revenue_row['expectedrevenue'] = candidate['ExpectedRevenue'];
    
    scenario.addRowToTable('expectedrevenue', j, revenue_row);  
    j += 1;
}

