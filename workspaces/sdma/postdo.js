console.log('POST DO')


let scenario = scenariomgr.getSelectedScenario();

scenario.renameTable('list_of_Production_solution', 'production')
scenario.renameTableColumn('production', 'id_of_Plant', 'Plants')
scenario.renameTableColumn('production', 'id_of_Month', 'Months')
scenario.renameTableColumn('production', 'id_of_Product', 'Products')
scenario.renameTableColumn('production', 'productionVar', 'value')


scenario.renameTable('list_of_ExecutedSales_solution', 'executed_sales')
scenario.renameTableColumn('executed_sales', 'id_of_Market', 'Markets')
scenario.renameTableColumn('executed_sales', 'id_of_Month', 'Months')
scenario.renameTableColumn('executed_sales', 'id_of_Product', 'Products')
scenario.renameTableColumn('executed_sales', 'executedSalesVar', 'value')

scenario.renameTable('list_of_CustomerInventory_solution', 'markets_inventory')
scenario.renameTableColumn('markets_inventory', 'id_of_Market', 'Markets')
scenario.renameTableColumn('markets_inventory', 'id_of_Month', 'Months')
scenario.renameTableColumn('markets_inventory', 'id_of_Product', 'Products')
scenario.renameTableColumn('markets_inventory', 'customerInventoryVar', 'value')

scenario.renameTable('list_of_Inventory_solution', 'plants_inventory')
scenario.renameTableColumn('plants_inventory', 'id_of_Plant', 'Plants')
scenario.renameTableColumn('plants_inventory', 'id_of_Month', 'Months')
scenario.renameTableColumn('plants_inventory', 'id_of_Product', 'Products')
scenario.renameTableColumn('plants_inventory', 'inventoryVar', 'value')

scenario.renameTable('list_of_Delivery_solution', 'markets_allocation')
scenario.renameTableColumn('markets_allocation', 'id_of_Plant', 'Plants')
scenario.renameTableColumn('markets_allocation', 'id_of_Market', 'Markets')
scenario.renameTableColumn('markets_allocation', 'id_of_Month', 'Months')
scenario.renameTableColumn('markets_allocation', 'id_of_Product', 'Products')
scenario.renameTableColumn('markets_allocation', 'deliveryVar', 'value')

scenario.renameTableColumn('kpis', 'NAME', 'sdkpi')
scenario.renameTableColumn('kpis', 'VALUE', 'value')

