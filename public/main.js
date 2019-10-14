workspace = undefined;
config = undefined;
scenariomgr = undefined;
scenariogrid = undefined;
scenariocfg = undefined;
mlkey = undefined;
dokey = undefined;
flowkey = undefined;

appMode = false;
devMode = false;
deployMode = false;

function getConfig(workspace, cb) {
        axios({
                method:'get',
                url:'./api/config?workspace='+workspace,
                responseType:'json'
              })
        .then(function (response) {
                config = response.data;

                console.log("Config:");
                console.log(config);

                cb(workspace)
        });
}

function testui() {
      
 

}
var initDone = false;
function initGrid() {
        initDone = true;
        //testui();
        // return;
        if ('ui' in config) {
                if ( 'gridjs' in config.ui) {
                        let url = './api/config/file?fileName='+config.ui.gridjs;
                        if (workspace != undefined)
                                url += '&workspace='+workspace;
                        axios({
                                method:'get',
                                url:url,
                                responseType:'text'
                        })
                        .then(function (response) {
                                let grid = response.data;
                                eval(grid);
                                scenariogrid.redraw();
                        }); 
                }
                if ('widgets' in config.ui) {
                        scenariogrid.init(config.ui.widgets)
                }
        } else {
                // default
                scenariogrid.dodefaultdashboard();
                scenariogrid.redraw();
        }
}
function appConfigCB(workspace) {

        scenariocfg = config.scenario.config;
        scenariocfg["$scenario"] = { cb : appShowInputsAndOutputs }

        scenariomgr = new ScenarioManager(scenariocfg, workspace);        

        scenariomgr.loadScenarios();
        
        let title = 'NodeJS Application Prototype';
        if ( ('ui' in config) &&
                ('title' in config.ui) )
                title = config.ui.title;
        document.title = title;
        scenariogrid = new ScenarioGrid(title, 'scenario_grid_div', scenariomgr, {enableImport:true});
}


function paConfigCB(workspace) {
        
        function initOptim() {
                console.log("Init Optim....");
                axios({
                        method:'get',
                        url:'./api/optim/config?workspace='+scenariomgr.workspace,
                        responseType:'text'
                })
                .then(function (response) {                
                        if (response.data.status == "OK") {         
                                console.log("Init Optim: " + response.data.status + " (" + response.data.type + ")");
                                enableButton('SOLVE');
                                enableButton('OPTIMIZE');
                        } else {
                                console.error("Error with Init Optim: " + response.data.status);
                        }
                })
                // .catch(showHttpError);     
        }


        if (!('scenario' in config))
                config.scenario = { config: {}}
        if (!('config' in config.scenario))
                config.scenario.config = {}
        config.scenario.config['$scenario'] = { cb:paShowInputsAndOutputs };

        scenariomgr = new ScenarioManager(config.scenario.config, workspace);  

        //hack for now

        scenariomgr.loadScenarios()

        let title = 'PA - DO for WS/WML';
        if ( ('ui' in config) &&
                ('title' in config.ui) )
                title = config.ui.title;

        // DEV

        let devTitle =  document.getElementById("pa_dev_title");
        devTitle.innerHTML = '<h2>' + title + ' (Dev. mode)</h2> (<a href="../?workspace='+workspace+'">GO TO APP</a>)';
        if (devMode)
                document.title = title + ' (Dev. mode)';     

        let configDiv =  document.getElementById("dev_config_div");
        configDiv.style.display = "none"
        if (deployMode)
                document.title = title;     

        // DEPLOY

        let deployTitle =  document.getElementById("pa_deploy_title");
        deployTitle.innerHTML = '<h2>' + title + '</h2>';
        if ('showTitle' in config.ui &&
                config.ui.showTitle == false)
                deployTitle.style.display = 'none';                        
        if ('showConfig' in config.ui &&
                config.ui.showConfig == false)
                document.getElementById("DEPLOY_CONFIG").style.display = 'none';  

        let configPAInputVersionDeploy =  document.getElementById("CONFIG_PA_INPUT_VERSION_DEPLOY");
        configPAInputVersionDeploy.value = config.pa.mapping.input.version;
        configPAInputVersionDeploy.onchange  = function() { updateConfig("CONFIG_PA_INPUT_VERSION_DEPLOY", "pa.mapping.input.version", false); }

        let configPAOutputVersionDeploy =  document.getElementById("CONFIG_PA_OUTPUT_VERSION_DEPLOY");
        configPAOutputVersionDeploy.value = config.pa.mapping.output.version;
        configPAOutputVersionDeploy.onchange  = function() { updateConfig("CONFIG_PA_OUTPUT_VERSION_DEPLOY", "pa.mapping.output.version", false); }               

        if (dokey in config) {

                if ( ('action' in config[dokey]) && ('text' in config[dokey].action) ) {
                        document.getElementById('SOLVE').innerText = config[dokey].action.text;
                        document.getElementById('OPTIMIZE').innerText = config[dokey].action.text;
                }
                initOptim();

                document.getElementById("SOLVE").onclick = function() {mysolve(dokey, 'SOLVE')};   
                document.getElementById("OPTIMIZE").onclick = function() {myoptimize(dokey, 'OPTIMIZE')};   
        } else {
                disableButton('SOLVE');
                hideButton('OPTIMIZE');
        }

        if (flowkey in config) {
                if ( ('action' in config[flowkey]) && ('text' in config[flowkey].action) ) {
                        document.getElementById('FLOW').innerText = config[flowkey].action.text;
                document.getElementById("FLOW").onclick = function() {myflow(flowkey, 'FLOW')};   
                }
        } else {
                hideButton('FLOW');
        }

        if ('allowInit' in config.pa.mapping && config.pa.mapping.allowInit) {
        } else {
                hideButton('INITPA');  
                hideButton('DELETEPA');  
        }

        if (mlkey in config) {
                if ( ('action' in config[mlkey]) && ('text' in config[mlkey].action) ) {
                        document.getElementById('DEV_SCORE').innerText = config[mlkey].action.text;
                        document.getElementById('DEPLOY_SCORE').innerText = config[mlkey].action.text;
                }

                enableButton('DEV_SCORE');
                enableButton('DEPLOY_SCORE');

                document.getElementById("DEV_SCORE").onclick = function() {mydevscore(mlkey, 'DEV_SCORE')};   
                document.getElementById("DEPLOY_SCORE").onclick = function() {mydeployscore(mlkey, 'DEPLOY_SCORE')};   

        } else {
                disableButton('DEV_SCORE');
                hideButton('DEPLOY_SCORE');
        }

}

function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
                }
        }
        return undefined;
}

function load() {               

        workspace = getQueryVariable('workspace')
        if (workspace == undefined)
                workspace = "default";
        
        dokey = getQueryVariable('dokey')
        if ( (dokey == undefined) || (dokey == "") )
                dokey = "do";

        mlkey = getQueryVariable('mlkey')
        if ( (mlkey == undefined) || (mlkey == "") )
                mlkey = "ml";

        flowkey = getQueryVariable('flowkey')
        if ( (flowkey == undefined) || (flowkey == "") )
                flowkey = "flow";

        let url_string = window.location.href;
        console.log(url_string);
        devMode = url_string.includes('/dev/');
        deployMode = url_string.includes('/deploy/');
        appMode = (!devMode) && (!deployMode);

        let appModeDiv =  document.getElementById("scenario_grid_div");
        let devModeDiv =  document.getElementById("devMode_div");
        let deployModeDiv =  document.getElementById("deployMode_div");
        if (devMode) {
                console.log("Development mode");
                devModeDiv.style.display = "block";
                deployModeDiv.style.display = "none";

                let importDivHTML = getImportHTML(workspace) + getProgressHTML();
                let importDiv = document.getElementById("import_div");
                importDiv.initDone = false;
                importDiv.innerHTML = importDivHTML;
                
                hideProgress();
        } 
        if (deployMode) {
                console.log("Deployment mode");
                devModeDiv.style.display = "none";
                deployModeDiv.style.display = "block";
        }

        if (appMode) {
                console.log("Application mode");
                devModeDiv.style.display = "none";
                deployModeDiv.style.display = "none";
                appModeDiv.style.display = "block";
                getConfig(workspace, appConfigCB);
        } else {
                
                document.getElementById("DEV_CONFIG_BTN").onclick = toggleDevConfig;

                document.getElementById("DEV_IMPORT_BTN").onclick = function () {switchVisibleImport(workspace);}

                let configDiv =  document.getElementById("deploy_config_div");
                configDiv.style.display = "none"
                document.getElementById("DEPLOY_CONFIG_BTN").onclick = toggleDeployConfig;

                let mappingDiv =  document.getElementById("mapping_div");
                mappingDiv.style.display = "none"
                document.getElementById("MAPPING_BTN").onclick = toggleMapping;

                let modelDiv =  document.getElementById("model_dev_div");
                modelDiv.style.display = "none"
                document.getElementById("MODEL_BTN").onclick = toggleModel;

                let inputsDiv =  document.getElementById("inputs_div");
                inputsDiv.style.display = "none"
                document.getElementById("INPUTS_BTN").onclick = toggleInputs;


                let outputsDiv =  document.getElementById("outputs_div");
                outputsDiv.style.display = "none"
                document.getElementById("OUTPUTS_BTN").onclick = toggleOutputs;

                //document.getElementById("ALLDIMENSIONS").onclick = getAllDimensions;       
                //document.getElementById("ALLCUBES").onclick = getAllCubes;       
                document.getElementById("INITPA").onclick = function() {initPA('INITPA');}; 
                document.getElementById("DELETEPA").onclick = function() {deletePA('DELETEPA');}; 

                document.getElementById("GETFROMPA").onclick = function() {getFromPA('GETFROMPA');}; 
                document.getElementById("PUSHTOWS").onclick = function() {createProjectAndPushToWS('PUSHTOWS')}; 
                document.getElementById("OPENWS").onclick = openWS;                 

                document.getElementById("PUSHTOPA").onclick = function() {pushToPA('PUSHTOPA')};   ; 

                
                getConfig(workspace, paConfigCB);      
        }

};


function onChangeScenario() {
        console.log("Selected scenario " + scenariomgr.getSelectedScenario().getName());
        let scenario = scenariomgr.getSelectedScenario();
        
        appShowInputsAndOutputs(scenario);       

        if ('pa' in config)
                if ('mapping' in config.pa)
                        if ('output' in config.pa.mapping)
                                if ('version' in config.pa.mapping.output)
                                        config.pa.mapping.output.version = scenario.getName();
}


function appShowInputsAndOutputs(scenario) {
        if (!initDone)
                initGrid();
        scenariogrid.redraw();
}


var initMADone = false;
function paShowInputsAndOutputs(scenario) {
        // if (scenario != scenariomgr.getSelectedScenario())
        //         return;
        if (scenario == undefined)
                return;
        if (scenario.name == config.pa.mapping.input.version)
                showAsGoogleTables(scenario, 'inputs_tables_div', 'input', undefined, undefined, true);
        if (scenario.name == config.pa.mapping.output.version)
                showAsGoogleTables(scenario, 'outputs_tables_div', 'output', undefined, undefined, true);

                
        if ('ma' in config) {
                if (!initMADone) {
                        if (devMode) 
                                showAsMA(scenariomgr, 'ma_dev_div');
                        else
                                showAsMA(scenariomgr, 'ma_deploy_div');
                }
                initMADone = true;
        }
}