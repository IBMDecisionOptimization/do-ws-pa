


let scenario = scenariomgr.getSelectedScenario(); 


//let cols = ['ID', 'Customer ID','Gender','Affinity','Annual Spend','Loyalty Program Member','Response Channel','CLV','Offer','Offername'];

let inputmls = scenario.getTableRows('inputmlresponse');
scenario.removeAllRowsFromTable('Probability')

let responses = scenario.getTableRows('response');

let i = 0;
for (let r in inputmls) {
    let input = inputmls[r];
    let response = responses[r];

    let row = {}
    row['CustomerID'] = input['Customer ID'];
    row['OfferID'] = input['Offer']
    row['ChannelID'] = input['Response Channel'];
    row['Probability'] = response['value'];

    
    scenario.addRowToTable('Probability', i, row);
    
    i++;
}
