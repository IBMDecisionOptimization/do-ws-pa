
scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget({x:0, y:2});


var mymap;
function mapcb() {

    let scenario = scenariomgr.getSelectedScenario();
    let ambulances = scenario.tables['ambulances'].rows;

    let n = 0
    let tlat = 0;
    let tlng = 0;
    for (i in ambulances) {
            let row = ambulances[i];
            tlat += parseFloat(row['LATITUDE']);
            let str = row['LONGITUDE'].replace(/\"/gi, "");
            tlng +=  parseFloat(str);
            n += 1;
    }
    tlat /=n;
    tlng /= n;        


    if (mymap != undefined)
            mymap.remove();

    mymap = L.map('map_div').setView([tlat, tlng], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

        
        let accidents = scenario.tables['predicted-accidents'].rows;

        var accidentIcon = L.icon({
                iconUrl: 'images/patient.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        for (i in accidents) {
                let row = accidents[i];
                let lat = parseFloat(row.LATITUDE);
                let str = row.LONGITUDE;
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:accidentIcon}).addTo(mymap)
					.bindPopup("Accident " + row.id).openPopup();
        }

        var ambulanceIcon = L.icon({
                iconUrl: 'images/ambulance.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                 //popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        for (i in ambulances) {
                let row = ambulances[i];
                let lat = parseFloat(row['LATITUDE']);
                let str = row['LONGITUDE'].replace(/\"/gi, "");
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:ambulanceIcon}).addTo(mymap)
					.bindPopup("Ambulance").openPopup();
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


        let links = scenario.tables['links'].rows;

        for (l in links) {
                let link = links[l];
                let i1 = link.id1;
                let row1 = accidents[i1];
                let lat1 = parseFloat(row1.LATITUDE);
                let str1 = row1.LONGITUDE;
                let lng1 =  parseFloat(str1);
                let i2 = link.id2;
                let row2 = accidents[i2];
                let lat2 = parseFloat(row2.LATITUDE);
                let str2 = row2.LONGITUDE;
                let lng2 =  parseFloat(str2);

                var latlngs = [
                        [lat1, lng1],
                        [lat2, lng2]
                    ];
                var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
                

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
        x: 2,
        y: 0,
        width: 10,
        height: 10,
        title: "map",
        innerHTML: '<div id="map_div" style="width: 100%; height: calc(100% - 30px);"><svg></svg></div>',
        cb: mapcb
}


scenariogrid.addCustomWidget('map', mapcfg);

scenariogrid.addKPIsWidget(0, 10, 12, 5);



scenariogrid.addTablesWidget('Inputs', 'input', undefined, 0, 15, 6, 4);

scenariogrid.addTablesWidget('Outputs', 'output', undefined, 6, 15, 6, 4);

