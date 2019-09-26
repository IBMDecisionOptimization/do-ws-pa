
var mymap = undefined;

function mapcb() {

        let scenario = scenariomgr.getSelectedScenario();

        let geos = scenario.tables['Geo'].rows;

        let n = 0
        let tlat = 0;
        let tlng = 0;
        for (i in geos) {
                let geo = geos[i];
                tlat += parseFloat(geo.geo_y);
                let str = geo.geo_x.replace(/\"/gi, "");
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

        
        var geoIcon = L.icon({
                iconUrl: 'images/target-16.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                // popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        for (i in geos) {
                let geo = geos[i];
                let lat = parseFloat(geo.geo_y);
                let str = geo.geo_x;
                let lng =  parseFloat(str);
                L.marker([lat, lng], {icon:geoIcon}).addTo(mymap)
                                        .bindPopup("Geo " + geo.geo_code).openPopup();
                                        
                L.circle([lat, lng], Math.trunc(geo.retail_market)/10000, {
                	color: '#3186cc',
                	fillColor: '#3186cc',
                	fillOpacity: 0.2
                	
//                 	color='#3186cc',
//                         fill_color='#3186cc',
//                         fill=True,
//                         fill_opacity=0.4,
                }).addTo(mymap).bindPopup("Retail Market for "+geo.geo_code+" is "+geo.retail_market);
        }

        var storeOpenIcon = L.icon({
                iconUrl: 'images/store-open-32.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                 //popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        var storeClosedIcon = L.icon({
                iconUrl: 'images/store-closed-32.png',
                // shadowUrl: 'leaf-shadow.png',
            
                //iconSize:     [16, 16], // size of the icon
                // shadowSize:   [50, 64], // size of the shadow
                 iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
                // shadowAnchor: [4, 62],  // the same for the shadow
                 //popupAnchor:  [-32, -32] // point from which the popup should open relative to the iconAnchor
            });

        let stores = scenario.tables['StoreOutput'].rows;

        for (i in stores) {
                let store = stores[i];
                let icon = storeClosedIcon
                let text = 'Old';
                if (store.is_open != "True")  {
                        icon = storeOpenIcon;
                        text = 'New';
                }
                	
                let geo_code = store.store_geo_code;
                let lat = parseFloat(geos[geo_code].geo_y);
                let str = geos[geo_code].geo_x;
                let lng =  parseFloat(str);

                L.marker([lat, lng], {icon:icon}).addTo(mymap).bindPopup(text + " store " + geo_code).openPopup();
                
        }

	

	// // L.polygon([
	// // 	[51.509, -0.08],
	// // 	[51.503, -0.06],
	// // 	[51.51, -0.047]
	// // ]).addTo(mymap).bindPopup("I am a polygon.");


        // let links = scenario.tables['links'].rows;

        let geostores = scenario.tables['GeoStoreOutput'].rows;

        for (l in geostores) {
                let geostore = geostores[l];
                let i1 = geostore.customer_geo_code;
                let lat1 = parseFloat(geos[i1].geo_y);
                let str1 = geos[i1].geo_x;
                let lng1 =  parseFloat(str1);
                let i2 = geostore.store_geo_code;
                let lat2 = parseFloat(geos[i2].geo_y);
                let str2 = geos[i2].geo_x;
                let lng2 =  parseFloat(str2);

                var latlngs = [
                        [lat1, lng1],
                        [lat2, lng2]
                    ];
                var polyline = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
                
        }
       



	// var popup = L.popup();

	// function onMapClick(e) {
	// 	popup
	// 		.setLatLng(e.latlng)
	// 		.setContent("You clicked the map at " + e.latlng.toString())
	// 		.openOn(mymap);
	// }

	// mymap.on('click', onMapClick);
}


scenariogrid.addScenarioWidget(onChangeScenario, 0, 0, 2, 2);
        
scenariogrid.addSolveWidget({x:0, y:2});

   
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

