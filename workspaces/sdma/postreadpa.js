console.log('POST READ PA')

let goodmonths = ['Jan-07', 'Feb-07', 'Mar-07'];
let scenario = scenariomgr.getSelectedScenario();

function removeMonths(tableId) {
    let rows = scenario.getTableRows(tableId); 
    let toBeRemoved = {}
    for (let r in rows) {
        let row = rows[r];
        if ('Months' in row) {
            let month = row['Months']
            if ( goodmonths.indexOf(month) < 0 )
                toBeRemoved[r] = rows[r]
        }
    }
    for (let r in toBeRemoved)
        delete rows[r];
}

// scenario.renameTableColumn('plant_month_capacity', 'Plants', 'Plant')
// scenario.renameTableColumn('plant_month_capacity', 'Months', 'Month')
// scenario.renameTableColumn('plant_month_capacity', 'value', 'Value')
removeMonths('plant_month_capacity')

// scenario.renameTableColumn('plant_product_capacity', 'Plants', 'Plant')
// scenario.renameTableColumn('plant_product_capacity', 'Products', 'Product')
// scenario.renameTableColumn('plant_product_capacity', 'value', 'Value')

// scenario.renameTableColumn('plant_product_cost', 'Plants', 'Plant')
// scenario.renameTableColumn('plant_product_cost', 'Products', 'Product')
// scenario.renameTableColumn('plant_product_cost', 'value', 'Value')

// scenario.renameTableColumn('demand', 'Products', 'Product')
// scenario.renameTableColumn('demand', 'Markets', 'Market')
// scenario.renameTableColumn('demand', 'Months', 'Month')
// scenario.renameTableColumn('demand', 'value', 'Value')
removeMonths('demand')


// scenario.renameTableColumn('initial_inventory', 'Products', 'Product')
// scenario.renameTableColumn('initial_inventory', 'Markets', 'Market')
// scenario.renameTableColumn('initial_inventory', 'value', 'Value')

// scenario.renameTableColumn('product', 'Id', 'Name')

// scenario.renameTableColumn('plant', 'Id', 'Name')

// scenario.renameTableColumn('market', 'Id', 'Name')

// scenario.renameTableColumn('month', 'Id', 'Name')

// scenario.renameTableColumn('marginal_profit', 'Products', 'Product')
// scenario.renameTableColumn('marginal_profit', 'Markets', 'Market')
// scenario.renameTableColumn('marginal_profit', 'Months', 'Month')
// scenario.renameTableColumn('marginal_profit', 'value', 'Value')
removeMonths('marginal_profit')

// scenario.renameTableColumn('firm_sales', 'Products', 'Product')
// scenario.renameTableColumn('firm_sales', 'Markets', 'Market')
// scenario.renameTableColumn('firm_sales', 'Months', 'Month')
// scenario.renameTableColumn('firm_sales', 'value', 'Value')
removeMonths('firm_sales')

let months = scenario.getTableRows('month');
let newmonths = {}
for (let month in months) {
    if ( goodmonths.indexOf(month) < 0 )
        continue;
    newmonths[month] = months[month];
}
scenario.tables['month'].rows = newmonths;

months = scenario.getTableRows('month');
scenario.tables['month'].cols.push('Next')
scenario.tables['month'].cols.push('Index')
let last = null;
let i = 0
for (let month in months) {
    if (last != null) {
        last['Next'] = month;
        last['Index'] = i
    }
    i += 1;
    last = months[month];
}
last['Next'] = '';
last['Index'] = i