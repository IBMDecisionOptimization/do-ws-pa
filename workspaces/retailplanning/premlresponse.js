

let scenario = scenariomgr.getSelectedScenario(); 

let customers = scenario.getTableRows('Customer');
let offers = scenario.getTableRows('Offer');


let cols = ['ID', 'Customer ID','Gender','Affinity','Annual Spend','Loyalty Program Member','Response Channel','CLV','Offer','Offername'];

let inputml = scenario.addTable('inputmlresponse', 'output', cols, {'id':'ID'});

function percentRand() {
    return Math.floor(Math.random() * 100); 
}

let PERC_CUSTOMER = 40;
let PERC_OFFER = 10;

for (let c in customers) {
    let customer = customers[c];

    if (percentRand() > PERC_CUSTOMER)
        continue;

    for (let o in offers) {
        let offer = offers[o];

        if (percentRand() > PERC_OFFER)
            continue;

        let row = {}
        row['ID'] = customer['CustomerID']+'-'+offer['OfferID']

        row['Customer ID'] = customer['CustomerID'];
        row['Gender'] = customer['Gender'];
        row['Affinity'] = customer['Affinity'];
        row['Annual Spend'] = customer['Annual Spend'];
        row['Loyalty Program Member'] = customer['Loyalty Program Member'];
        row['Response Channel'] = customer['Response Channel'];
        row['CLV'] = customer['CLV'];

        row['Offer'] = offer['OfferID']
        row['Offername'] = offer['OfferDescription']

        row['Revenue'] = 100
        row['CostToServe'] = 100;

        scenario.addRowToTable('inputmlresponse', row['ID'], row);
    }
}
