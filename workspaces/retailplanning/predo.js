
// Probability 
// to 
// Candidate

let scenario = scenariomgr.getSelectedScenario(); 

let cols = ['CustomerID', 'OfferID', 'ChannelID', 'Probability', 'Cost', 'ExpectedRevenue'];

let candidates = scenario.addTable('Candidate', 'input', cols, {});


let probabilities = scenario.getTableRows('Probability');
let channels = scenario.getTableRows('Channel');
let offers = scenario.getTableRows('Offer');

for (let p in probabilities) {
    let probability = probabilities[p];
    
    let row = {}
    row['CustomerID'] = probability['CustomerID'];
    row['OfferID'] = probability['OfferID']
    row['ChannelID'] = probability['ChannelID'];
    row['Probability'] = probability['Probability'];
    row['Cost'] = channels[probability['ChannelID']]['cost'];
    row['ExpectedRevenue'] = probability['Probability'] * offers[probability['OfferID']]['revenue'];

    
    scenario.addRowToTable('Candidate', p, row);    
}


// OneRowParameters

let parameters = scenario.getTableRows('parameters');
let pcols =[];
let prow ={}
for (let p in parameters) {
    pcols.push(p);
    prow[p] = parameters[p].value;
}

let onerowparameters = scenario.addTable('OneRowParameters', 'input', pcols, {});
scenario.addRowToTable('OneRowParameters', 0, prow);
