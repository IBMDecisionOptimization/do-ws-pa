# do-ws-pa

## Table of contents

* [What it this?](#What-it-this?)  
* [How to use this?](#How-to-use-this?)  
  * [Run the nodejs service](#Run-the-nodejs-service)  
  * [Integrate into PA workbook](#Integrate-into-PA-workbook)  
  * [Configure workspace](#Configure-workspace)  
 


## What it this?

A service to easily connect IBM Planning Analytics (PA) and Watson Studio (WS) / Watson Machine Learning (WML), so that you can easily set up the integration of a deployed Decision Optimization (DO) or Machine Learning (ML) model to be executed from PA.

Look at a video showing what it does: https://ibm.box.com/s/v42tfs9m3w8mbni21xlw14x6cyuant5p

See some slides with some more details: https://fr.slideshare.net/AlainChabrier/do-for-ws-pa-external-v1

This aplication is using the shared npm package with goodies for DO for WS and PA: https://www.npmjs.com/package/do-ws-js

## How to use this?

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

