        
scenariogrid.addTextWidget('step1', 'Introduction', 
        'This demo replicates older Network Design demos. <br>' +
        'It prescibres where to open <b>Distribution Centers</b> in order to optimize the supplu chain between plants and customers.<br>' +
        'The input is the set of plants, distribution centers and customers.',
        0, 0, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addTableWidget('PLANTS', undefined, 0, 2, 4, 4);

scenariogrid.addTableWidget('DISTRIBUTION_CENTERS', undefined, 4, 2, 4, 4);

scenariogrid.addTableWidget('CUSTOMERS', undefined, 8, 2, 4, 4);
        

scenariogrid.addTextWidget('step2', 'Optimization', 
        'You can create different scenarios to optimize.<br>' +
        'In the parameter view, you can set parameters such as the minimal and maximla number of distribution centers to open. <br>',
        0, 6, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addScenarioWidget(onChangeScenario, 0, 8, 2, 3);
        
scenariogrid.addSolveWidget(0, 11, 2, 3);


scenariogrid.addTableWidget('PARAMETERS', undefined, 2, 8, 4, 6);


scenariogrid.addTablesWidget('Inputs', 'input', undefined, 6, 8, 6, 6);



scenariogrid.addTextWidget('step3', 'Solution', 
        'You can see the solution in the following views.<br>' +
        'A custom map isused to represent the supply chain. <br>',
        0, 14, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 0, 16, 3, 6);

var mymap;
function mapcb() {

    let scenario = scenariomgr.getSelectedScenario();
    let customers = scenario.tables['CUSTOMERS'].rows;

    let n = 0
    let tlat = 0;
    let tlng = 0;
    for (i in customers) {
            let row = customers[i];
            tlat += parseFloat(row['latitude']);
            let str = row['longitude'].replace(/\"/gi, "");
            tlng +=  parseFloat(str);
            n += 1;
    }
    tlat /=n;
    tlng /= n;        


    if (mymap != undefined)
            mymap.remove();

    mymap = L.map('map_div').setView([tlat, tlng], 5);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 16,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

        
        var customerIcon = L.icon({
                iconUrl: 'images/customer.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        for (i in customers) {
                let row = customers[i];
                let lat = parseFloat(row.latitude);
                let str = row.longitude;
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:customerIcon}).addTo(mymap)
					.bindPopup("Customer " + row.id).openPopup();
        }

        let plants = scenario.tables['PLANTS'].rows;

        var plantIcon = L.icon({
                iconUrl: 'images/plant.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        for (i in plants) {
                let row = plants[i];
                let lat = parseFloat(row.latitude);
                let str = row.longitude;
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:plantIcon}).addTo(mymap)
					.bindPopup("Customer " + row.id).openPopup();
        }

        var dcIcon = L.icon({
                iconUrl: 'images/dc.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                 //popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        let distributionCenters = scenario.tables['DISTRIBUTION_CENTERS'].rows;


        for (i in distributionCenters) {
                let row = distributionCenters[i];
                let lat = parseFloat(row['latitude']);
                let str = row['longitude'].replace(/\"/gi, "");
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:dcIcon}).addTo(mymap)
					.bindPopup("Distribution Center").openPopup();
        }

	// L.circle([51.508, -0.11], 500, {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5
	// }).addTo(mymap).bindPopup("I am a circle.");

	// L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(mymap).bindPopup("I am a polygon.");


        let shipPlantToDC = scenario.tables['shipPlantToDC'].rows;

        for (l in shipPlantToDC) {
                let link = shipPlantToDC[l];
                let ship = parseFloat(link.ship); 
                if (ship > 1) {
                        let i1 = link.plantId;
                        let row1 = plants[i1];
                        let lat1 = parseFloat(row1.latitude);
                        let str1 = row1.longitude;
                        let lng1 =  parseFloat(str1);
                        let i2 = link.dcId;
                        let row2 = distributionCenters[i2];
                        let lat2 = parseFloat(row2.latitude);
                        let str2 = row2.longitude;
                        let lng2 =  parseFloat(str2);

                        var latlngs = [
                                [lat1, lng1],
                                [lat2, lng2]
                        ];
                        var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
                }        

        }
       
        let shipDCToCustomer = scenario.tables['shipDCToCustomer'].rows;

        for (l in shipDCToCustomer) {
                let link = shipDCToCustomer[l];
                let ship = parseFloat(link.ship); 
                if (ship > 1) {
                        let i1 = link.dcId;
                        let row1 = distributionCenters[i1];
                        let lat1 = parseFloat(row1.latitude);
                        let str1 = row1.longitude;
                        let lng1 =  parseFloat(str1);
                        let i2 = link.customerId;
                        let row2 = customers[i2];
                        let lat2 = parseFloat(row2.latitude);
                        let str2 = row2.longitude;
                        let lng2 =  parseFloat(str2);

                        var latlngs = [
                                [lat1, lng1],
                                [lat2, lng2]
                        ];
                        var polyline = L.polyline(latlngs, {color: 'green'}).addTo(mymap);
                }        

        }


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
}

   
let mapcfg = { 
        x: 3,
        y: 16,
        width: 9,
        height: 6,
        title: "map",
        innerHTML: '<div id="map_div" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: mapcb
}


scenariogrid.addCustomWidget('map', mapcfg);



scenariogrid.addTextWidget('step4', 'Multiple Scenarios', 
        'You can see also compare KPIs form the multiple scenarios.<br>',
        0, 22, 12, 2,
        {background: "#ccdefc"})

scenariogrid.addKPIsWidget(0, 24, 12, 5);



