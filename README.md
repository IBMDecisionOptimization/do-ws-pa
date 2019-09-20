A sample application showing what can be done with the do-ws-js library. A prototype of application and service to easily connect IBM Planning Analytics (PA) and Watson Studio (WS) / Watson Machine Learning (WML), so that you can easily set up an application using Decision Optimization (DO) or Machine Learning (ML) and/or to integrate with Planning Analytics.


## Table of contents

* [What is this?](#What-is-this?)
  * [NodeJS Application](#NodeJS-Application)
  * [Planning Analytics](#Planning-Analytics)
* [How it works](#How-it-works)
* [The code](#The-code)
* [How to start a new application](#How-to-start-a-new-application)  
* [How to use the Planning Analytics service?](#How-to-use-the-Planning-Analytics-service?)  
  * [Run the nodejs service](#Run-the-nodejs-service)  
  * [Integrate into PA workbook](#Integrate-into-PA-workbook)  
  * [Configure workspace](#Configure-workspace)  
 


## What is this?

This is a sample repository for what can be done using the [do-ws-js](https://github.com/IBMDecisionOptimization/do-ws-js) library.

I shows to types oi usage:
* creating a NodeJS application
* creating an integration service with Planning Analytics

### NodeJS Application

A NodeJa application to prototype use of Decision Optimization by Line of Business.

![Screnshot](/images/ucp.png)

You can run other configurations (i.e. other applications) using for example <http://localhost:6004?workspace=sd>

You can see all existing configurations using <http://localhost:6004/workspaces>

### Planning Analytics
A service to easily connect IBM Planning Analytics (PA) and Watson Studio (WS) / Watson Machine Learning (WML), so that you can easily set up the integration of a deployed Decision Optimization (DO) or Machine Learning (ML) model to be executed from PA.

Look at a video showing what it does: https://ibm.box.com/s/v42tfs9m3w8mbni21xlw14x6cyuant5p

See some slides with some more details: https://fr.slideshare.net/AlainChabrier/do-for-ws-pa-external-v1

This aplication is using the shared npm package with goodies for DO for WS and PA: https://www.npmjs.com/package/do-ws-js

## How it works

### Dependencies

The nodejs package.json file lists dependencies on the do-ws-js package, along with some post install step to copy the js files into the public subdirectory.

```
 "scripts": {
    "postinstall": "copyfiles -f node_modules/do-ws-js/public/*.js public/do-ws-js && copyfiles -f node_modules/do-ws-js/public/stylesheets/*.css public/do-ws-js/stylesheets",
    "start": "node app.js"
  },
  "dependencies": {
    "axios": "^0.17.1",
    "body-parser": "x",
    "cfenv": "1.0.x",
    "express": "4.15.x",
    "multer": "x",
    "request": "2.83.x",
    "do-ws-js": ">=0.1.55"
  },
  ```
  
## The code

### Front end side
  
The HTML code is completely generic:
* public/index.html includes all required dependencies, and the main.js file
* public/main.js if the main file.
  
In the load() function it loads the config form the back end:
```
function load() {               
        workspace = location.search.split('workspace=')[1]
        if (workspace == undefined)
                workspace = "default";
        getConfig(workspace, configCB);

};
```

Then the configuration callback is called and:
* create a scenario manager,
* loads the scenarios from the back-end,
* creates a scenario grid 
using the configurations received.
```
function configCB(workspace) {
        scenariocfg = config.scenario.config;
        scenariocfg["$scenario"] = { cb : showInputsAndOutputs }

        scenariomgr = new ScenarioManager(scenariocfg, workspace);        

        scenariomgr.loadScenarios();
        
        let title = 'UnitCommitment Demo';
        if ( ('ui' in config) &&
                ('title' in config.ui) )
                title = config.ui.title;
        document.title = title;
        scenariogrid = new ScenarioGrid(title, 'scenario_grid_div', scenariomgr, {enableImport:true});
}
```

### Back-end side
The back end side code app.js file is also completely generic.

It imports the modules and call the function so that the APIs are setup.
```
var dowsjs = require('do-ws-js/dowsjs');
dowsjs.routeScenario(router);
dowsjs.routeSolve(router);
dowsjs.routeConfig(router);
dowsjs.routeWS(router);
```

### Configuration files

**Since 1.89 all workspaces specific files are under workspaces folder.**

For each application (that can be used with workspace=XXX), there is a configuration file under workspaces/XXX/config.json
It looks like (this one if the default one when no workspace is given):
```
{
    "name": "UCP",
    "scenario" : {        
        "config" : {
            "Units" : { "id":"Units", "title":"Units", "allowEdition":true},        
            "Loads" : {  "id":"Periods", "title":"Load", "allowEdition":true},
            "UnitMaintenances" : {"id":null, "title":"Maintenances", "allowEdition":true, "maxSize":1680},
            "Periods" : { "id":"Id", "title":"Periods"},
            "Weights" : { "id":"Id", "title":"Weights", "allowEdition":true},

            "production" : { "title":"Production", "columns": ["Units", "Periods", "value"] },
            "started" : { "title":"Started", "columns": ["Units", "Periods", "value"]},
            "used" : { "title":"Used", "columns": ["Units", "Periods", "value"]},
            "kpis" : { "id":"kpi", "title":"KPIs"}
        }
    },
    "ws" : {
        "type" : "local",
        "apiurl": "https://xxxxxx
        "url": "https://xxxxx
        "login": "alain.chabrier@ibm.com",
        "password": "xxxxxxxxxxxxx",
        "projectName": "PA3"
      },
    "do" : {  
        "url":  "https://api-oaas.docloud.ibmcloud.com/job_manager/rest/v1/",
        "key": "api_xxxxxxxxxxxxxxxxxxxxxxxxx",
        "model": "model.py"
    },
    "ui" : {
        "title": "Unit Commitment",
        "grid" : "grid.js"
    }

}
```

The difference sections:
* **scenario**: some configuration on the different tables (input and output) used in the scenarios.
* **ws**: (optional) configuration of connection to some Watson Studio Local instance to import models and data.
* **do**: configuration of how optimization is executed
* **ui**: configuration of some additional UI properties, including the use of a separate JS file which will do some more precise setup of the grid layout.

More documentation on configuration files in [do-ws-js](https://github.com/IBMDecisionOptimization/do-ws-js).

### Scenario persistence
For each workspace and scenario, data is stored as a set of csv files under ./data/workspace_name/scenario_name
There is also a scenario.json file specifying the categories of the different tables.
For example:
```
{
    "parameters": {
        "category": "input"
    },
    "predicted-accidents": {
        "category": "input"
    },
    "ambulances": {
        "category": "output"
    },
    "kpis": {
        "category": "output"
    },
    "links": {
        "category": "output"
    }
}
```

## How to start a new application

The repository comes with a few examples of applications organized into workspaces.
For each workspace, there must be a config.json configuration file under ./workspaces/workspace_name/config.json.


### Start from a data set

One way to start is to use a set of csv files.
The csv files must have the column names as first row in file.
Create a ./data/workspace_name/scenario 1 folder and put all your csv files in it.
Create a scenario.json file with the structure shown above

Then create a configuration for this workspace under ./workspaces/workspace_name/config.json.
The minimal content of this file should be like:
```
{
    "name": "My Application Name",
    "scenario" : {        
        "config" : {

        }
    }
    "ui" : {
        "title": "My Application Title"
    }
}
```

You will be able to add configuration for DO, ML or PA later.

### Start importing some scenario from Watson Studio

An alternative to quickly start a new application is to import scenario, and/or dashboard and/or optimization model, from Watson Studio.
For that create a minimal configuration file under ./workspaces/workspace_name/config.json, with some ws section:
```
{
    "name": "Bridge",
    "scenario" : {        
        "config" : {

        }
    },
    "ws" : {
      "type" : "local",
      "apiurl": "https://xxxxxx
      "url": "https://xxxxx
      "login": "alain.chabrier@ibm.com",
      "password": "xxxxxxxxxxxxx",
      "projectName": "PA3"
    },
    "ui" : {
        "title": "Bridge",
        "gridjs" : "grid.js"
    }
}
```

Then run the node js application for this workspace using <http://localhost:6004?workspace=workspace_name>, and click on the import button on the top right. You should get the list of available projects in your Watson Studio instance.
You can then import scenarios and save them, They will be stored in your local data folder.


## How to use the Planning Analytics service?

Here are the parts to do in order to use this:
* get access or set up some **Planning Analytics environment**: 
  * it can be either a Cloud or Local Planning Analytics environment, it just need to be accessible from the server running the integration service.
  * some TM1 server with the data to use must be available (otherwise you can createthe data from within PA)
  + some PA workbook should be created with widgets exposing this data (otherwise just create it!)
* get access or set up some **Decision Optimization environment**: 
  * it can be WS/WML Local, WS/WML Cloud, DO CPLEX CLoud, or even a local installation of optimization on the server running the service. It just needs to be accessible from the server running the integration service.
  * have some optimization for what you want to solve, or be ready to create one.
* set up and start this **integration service** locally or on the cloud, (or use a existing service). 
  * One instance of the service can be used for as many PA/DO applications using different *workspaces*  
* add some widget to the integration service in your **Planning Aanalytics workbook**
  * start with the development widget so that you can configure the integration
* update the **do-ws-js workspace configuration** for your application integration case.
   

## Run the nodejs service

### Prerequisites

* nodejs and npm: https://nodejs.org/download/release/v6.11.3/

### Set up

To setup the nodejs service:
* clone this github repository
* optionnaly create a new workspace for your application in the **./workspaces/** subdirectory (you can duplicate some of the existing ones)
* update the config.json file from this workspace for the for your need. 
* in the service directory, do:

```
npm install
npm start
```

* Try the app using either:
  * http://localhost:8080/dev/
  * https://localhost:8443/dev/


## Integrate into PA workbook

This integration service serves some web UIs that can easily be integrated into Planning Analytics workbooks.

### Add a widget
In the workbook, click on the pencil to edit.
Add a web widget.
Set the URL of the widget.

### Development UI

The development UI can be embedded as a widget into some page of the PA workbook so that itis easy to develop and configure the integration.

![Dev widget](/images/padev.png)

The flow of 5 actions allos to setup the integration:
  1. extract cubes and dimensions from PA into a scenario
  1. push scenario to a WS Local project where the models can be created and deployed by the Data Scientist
  1. directly open the WS Local environment with the right project 
  1. either (buttons are shown depending on do/ml configuration existing)
     * solve the deployed optimization model with the locally loaded scenario
     * score the deployed machine learning model with the locally loaded scenario 
  1. push back the solution form scenario to Planning Analytics cubes and dimensions

Some tools are availble to check that each step is working correctly:
  * **inputs** show the imported input tables from PA
  * **model** can be used sometimes to preview the model
  * **outputs** show the solution of the optimization 
  * **config** is a json editor to directly edit the configuration.
  
You can embed this as a web widget in some page of the Planning Analytics workbook.

This UI is availble through:
  * http://localhost:8080/dev/
  * https://localhost:8443/dev/
  
You can specify the workspace to use adding _?workspace=my_workspace_.

When the integration is correctly setup, you can also embed the deployment widget.

### Deployment UI

After the integration is correctly configured, you can replace the widget with a deployement widget, for the Line of Business user to use the configured integration and without any risk to break any configuration.

![Deploy widget](/images/padeploy.png)

It provides the following actions:
  1. solve/score (buttons are shown depending on do/ml configuration existing) which will do the full end to end flow from loading from Planning Analytics, solving/scoring with the deployed  model, and pushing back the solution into Planning Analytics.
  1. config to change the inmput and output version/scenario to read/write from/to PA

You can embed this as a web widget in some page of the Planning Analytics workbook.

This UI is availble through:
  * http://localhost:8080/deploy/
  * https://localhost:8443/deploy/

You can specify the workspace to use adding _?workspace=my_workspace_.

## Configure workspace

Different workspaces can be used for different integrations.

The configuration of connection to PA, WS and Deployed optimization model is done the config.json file under **workspaces/myworkspace/**:

The JSON object containes different sections for important configurations:
* pa - to configure the connection to PA/tm1 severs
* ws -  to confiogure the connection to the WS development environment
* do - to configure the connection to the deployed model
* ml - optionnal configure connection to a deployed ML model to score


You can refer to [do-ws-js documentation](https://github.com/IBMDecisionOptimization/do-ws-js/blob/master/README.md) for more information on the configuration.

#### PA configuration

The PA configuration sets the url to log and use the REST API for the TM1 server you want to connect to.
It also contains a mapping section configuring how cubes are mapped to input tables when data is extracted from PA and how output tables are mapped to cubes when they are stored back into PA.

It can be something like:

```
	"pa": {	
		"description":"PA Local on ibmdemos",
		"loginurl" : "http://ibmdemos/login",
		"url" : "http://ibmdemos/tm1/Decision%20Optimisation",
		"username": "pm",
		"password": "IBMDem0s",
		"mapping" : {
			"versionDimensionName": "Version",
			"input": {
				"version": "Baseline",
				"dimensions": {
					"Periods": {
						"name": "Periods"
					}
				},
				"cubes": {
					"Units": {
						"name": "Units",
						"propertyDimensionName": "UnitProperties"
					},
					"UnitMaintenances": {
						"name": "UnitMaintenances"
					},
					"Loads": {
						"name": "Loads"
					}
				}
			},
			"output": {
				"version": "Baseline",
				"cubes": {
					"production": {
						"name": "production"
					},
					"started": {
						"name": "started"
					},
					"used": {
						"name": "used"
					},
					"kpis": {
						"name" : "kpis",
						"adddummy" : true
					}
				},
				"prefix": "_ucp"
			}
		}
	},
```

