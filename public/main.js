var workspace = undefined;
var config = null;
var scenariomgr = null;

var devMode = false;

function showHttpError(error) {
        if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
        } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
       } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
        }
        console.log(error.config);
    }
    
function updateConfig(fieldId, configId, push = true) {
        let value = document.getElementById(fieldId).value;
        
        var schema = config;  // a moving reference to internal objects within obj
        var pList = configId.split('.');
        var len = pList.length;
        for(var i = 0; i < len-1; i++) {
                var elem = pList[i];
                if( !schema[elem] ) schema[elem] = {}
                schema = schema[elem];
        }

        schema[pList[len-1]] = value;

        if (push)
                axios({
                        method: 'put',
                        url: './api/config?workspace='+scenariomgr.workspace,
                        data: config,
                        responseType:'json'
                }).then(function(response) {
                        console.log('Updated config');
                        console.log(response);
                }).catch(showHttpError);
}

function getConfig(workspace) {
        axios({
                method:'get',
                url:'./api/config?workspace='+workspace,
                responseType:'json'
              })
        .then(function (response) {
                obj = response.data;

                config = obj;
                console.log("Config:");
                console.log(config);

                if (!('scenario' in config))
                        config.scenario = { config: {}}
                if (!('config' in config.scenario))
                        config.scenario.config = {}
                config.scenario.config['$scenario'] = { cb:showInputsAndOutputs };

                scenariomgr = new ScenarioManager(config.scenario.config, workspace);  

                //hack for now

                scenariomgr.loadScenarios()

                // DEV

                let devTitle =  document.getElementById("pa_dev_title");
                if ('title' in config.ui)
                        devTitle.innerHTML = '<h2>' + config.ui.title + ' (setup)</h2>';
                                                  
                
                let configDiv =  document.getElementById("dev_config_div");
                configDiv.style.display = "none"

                // DEPLOY

                let deployTitle =  document.getElementById("pa_deploy_title");
                if ('title' in config.ui)
                        deployTitle.innerHTML = '<h2>' + config.ui.title + '</h2>';
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

                if ('do' in config) {

                        if ( ('action' in config.do) && ('text' in config.do.action) ) {
                                document.getElementById('SOLVE').innerText = config.do.action.text;
                                document.getElementById('OPTIMIZE').innerText = config.do.action.text;
                        }
                        initOptim();
      
                        document.getElementById("SOLVE").onclick = function() {mysolve('SOLVE')};   
                        document.getElementById("OPTIMIZE").onclick = function() {myoptimize('OPTIMIZE')};   
                } else {
                        disableButton('SOLVE');
                        hideButton('OPTIMIZE');
                }

                
                if ('ml' in config) {
                        if ( ('action' in config.ml) && ('text' in config.ml.action) ) {
                                document.getElementById('DEV_SCORE').innerText = config.ml.action.text;
                                document.getElementById('DEPLOY_SCORE').innerText = config.ml.action.text;
                        }

                        enableButton('DEV_SCORE');
                        enableButton('DEPLOY_SCORE');

                        document.getElementById("DEV_SCORE").onclick = function() {mydevscore('DEV_SCORE')};   
                        document.getElementById("DEPLOY_SCORE").onclick = function() {mydeployscore('DEPLOY_SCORE')};   

                } else {
                        disableButton('DEV_SCORE');
                        hideButton('DEPLOY_SCORE');
                }

             
        })
        .catch(showHttpError);     
}


function hideButton(WHAT) {
        document.getElementById(WHAT).style.display = 'none';
}

function disableButton(WHAT) {
        document.getElementById(WHAT).disabled = true;
}

function enableButton(WHAT) {
        document.getElementById(WHAT).disabled = false;
}


function getFromPA(btn_id, cb) {

        let scenarioName = config.pa.mapping.input.version;
        if (!(scenarioName in scenariomgr.getScenarios()))
                scenariomgr.newScenario(scenarioName);
        let scenario = scenariomgr.getScenarios()[scenarioName];

        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;
        scenario.importFromPA(function (status) {
                        btn.disabled = true;
                        btn.innerHTML = status
                }, 
                function (){
                        btn.disabled = false;
                        btn.innerHTML = btn_txt;
                        scenariomgr.setSelectedScenario(scenarioName);
                        showAsGoogleTables(scenario, 'inputs_div', 'input', undefined, undefined, true);
                        scenariomgr.saveScenario(scenario);
                        if (cb != undefined)
                                cb();
                });
}

function createProjectIfNecessary(cb = undefined) {
        axios({
                method: 'get',
                url: './api/ws/projects?workspace='+scenariomgr.workspace,
                responseType:'json'
        }).then(function(response) {
                console.log('Read WS project list');
                let projects = response.data;
                let found = false;
                for (p in projects) {
                        let project = projects[p];
                        if (project.name == config.ws.projectName) {
                                found = true;
                                break;
                        }
                }

                if (!found)
                        axios({
                                method: 'put',
                                url: './api/ws/project/' + config.ws.projectName+'?workspace='+scenariomgr.workspace,
                                responseType:'json'
                        }).then(function(response) {
                                console.log('Created WS project');

                                if (cb != undefined)
                                        cb();

                        }).catch(showHttpError);
                else
                        if (cb != undefined)
                                cb();
        }).catch(showHttpError);
}
     

function pushToWS() {

        disableButton('PUSHTOWS');
        let scenarioName = config.pa.mapping.input.version;
        let projectName = config.ws.projectName;
        let scenario = scenariomgr.getScenarios()[scenarioName];
        
        let tableIds = scenario.getInputTables()
        let n = tableIds.length;
        for (t in tableIds)  {
                let tableId = tableIds[t];
                
                var data = new FormData();
                var csv = scenario.getTableAsCSV(tableId);
                data.append(tableId+".csv", csv);

                axios({
                        method: 'post',
                        url: './api/ws/project/'+projectName+'/dataset/'+tableId+'?workspace='+scenariomgr.workspace,
                        data: data,
                        responseType:'json'
                }).then(function(response) {
                        console.log('Created dataset ' + tableId );
                        n--;
                        if (n==0) {
                                enableButton('PUSHTOWS');
                        }        
                }).catch(showHttpError);

        }
}

function createProjectAndPushToWS() {
        createProjectIfNecessary(pushToWS);        
}

function openWS() {
        let url = config.ws.url + '#/projects/'  + config.ws.projectName;
        if ('projectId' in config.ws)
                url = config.ws.url + '/projects/'  + config.ws.projectId + '/overview';
        var win = window.open(url, '_blank');
        win.focus();
}

function mysolve(btn_id, cb) {

        if (scenariomgr.getSelectedScenario() == undefined) {
                alert('No Scenario. Call import first.')
                return;
        }
        let scenario = scenariomgr.getSelectedScenario();

        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;

        scenario.solve(function (status) {
                        btn.disabled=true;
                        btn.innerHTML = status;
                }, function () {
                        btn.disabled=false;
                        btn.innerHTML = btn_txt;

                        showAsGoogleTables(scenario, 'outputs_div', 'output', undefined, undefined, true);
                        scenariomgr.saveScenario(scenario);
        
                        if (cb != undefined)
                                cb();

                });

}



function mydevscore(btn_id, cb) {

        if (scenariomgr.getSelectedScenario() == undefined) {
                alert('No Scenario. Call import first.')
                return;
        }
        let scenario = scenariomgr.getSelectedScenario();

        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;

        scenario.score(function (status) {
                        btn.disabled=true;
                        btn.innerHTML = status;
                }, function () {
                        btn.disabled=false;
                        btn.innerHTML = btn_txt;
                        
                        showAsGoogleTables(scenario, 'outputs_div', 'output', undefined, undefined, true);
                        scenariomgr.saveScenario(scenario);
                        
                        if (cb != undefined)
                                cb();
                });
}

function pushToPA(btn_id, cb) {

        if (scenariomgr.getSelectedScenario() == undefined) {
                alert('No Scenario. Call import and solve/score first.')
                return;
        }
        let scenario = scenariomgr.getSelectedScenario();

        let btn = document.getElementById(btn_id);
        let btn_txt = btn.innerHTML;

        scenario.exportToPA(function (status) {
                        btn.disabled = true;
                        btn.innerHTML = status;
                }, function () {
                        btn.disabled = false;
                        btn.innerHTML = btn_txt;
                        if (cb != undefined)
                                cb();   
                });

}


function myoptimize(btn_id) {
        getFromPA(btn_id, function(){
                mysolve(btn_id, function() {
                        pushToPA(btn_id);
                });
        } );
        
        
}

function mydeployscore(btn_id) {
        getFromPA(btn_id, function(){
                mydevscore(btn_id, function() {
                        pushToPA(btn_id);
                });
        } );
        
        
}

function toggleDevConfig() {
        let configDiv =  document.getElementById("dev_config_div");
        let inputsDiv =  document.getElementById("inputs_div");
        let maDiv =  document.getElementById("ma_dev_div");
        let outputsDiv =  document.getElementById("outputs_div");        
        if (configDiv.style.display === "none") {
                configDiv.style.display = "block";
                inputsDiv.style.display = "none";
                maDiv.style.display = "none";
                outputsDiv.style.display = "none";

                showAsConfig('CONFIG_EDITOR', config)

        } else {
                configDiv.style.display = "none";
        }
}

function toggleDeployConfig() {
        let configDiv =  document.getElementById("deploy_config_div");

        if (configDiv.style.display === "none") {
                configDiv.style.display = "block";
        } else {
                configDiv.style.display = "none";
        }
}

function toggleInputs() {
        let configDiv =  document.getElementById("dev_config_div");
        let inputsDiv =  document.getElementById("inputs_div");
        let maDiv =  document.getElementById("ma_dev_div");
        let outputsDiv =  document.getElementById("outputs_div");
        if (inputsDiv.style.display === "none") {      
                configDiv.style.display = "none";          
                inputsDiv.style.display = "block";
                maDiv.style.display = "none";
                outputsDiv.style.display = "none";
        } else {
                inputsDiv.style.display = "none";
        }
}

function toggleOutputs() {
        let configDiv =  document.getElementById("dev_config_div");
        let inputsDiv =  document.getElementById("inputs_div");
        let maDiv =  document.getElementById("ma_dev_div");
        let outputsDiv =  document.getElementById("outputs_div");
        if (outputsDiv.style.display === "none") {   
                configDiv.style.display = "none";  
                inputsDiv.style.display = "none";    
                maDiv.style.display = "none"; 
                outputsDiv.style.display = "block";
        } else {
                outputsDiv.style.display = "none";
        }
}

function toggleMA() {
        let configDiv =  document.getElementById("dev_config_div");
        let inputsDiv =  document.getElementById("inputs_div");
        let maDiv =  document.getElementById("ma_dev_div");
        let outputsDiv =  document.getElementById("outputs_div");
        if (maDiv.style.display === "none") {   
                configDiv.style.display = "none";  
                inputsDiv.style.display = "none";    
                maDiv.style.display = "block"; 
                outputsDiv.style.display = "none";
        } else {
                maDiv.style.display = "none";
        }
}

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
                        console.error("Error with Init Optim.");
                }
        })
        .catch(showHttpError);     
}

var initMADone = false;
function showInputsAndOutputs(scenario) {
        // if (scenario != scenariomgr.getSelectedScenario())
        //         return;
        if (scenario == undefined)
                return;
        if (scenario.name == config.pa.mapping.input.version)
                showAsGoogleTables(scenario, 'inputs_div', 'input', undefined, undefined, true);
        if (scenario.name == config.pa.mapping.output.version)
                showAsGoogleTables(scenario, 'outputs_div', 'output', undefined, undefined, true);

                
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

function load() {        
        workspace = location.search.split('workspace=')[1]
        if (workspace == undefined)
                workspace = 'default';

        let url_string = window.location.href;
        console.log(url_string);
        devMode = url_string.includes('/dev/');

        let devModeDiv =  document.getElementById("devMode_div");
        let deployModeDiv =  document.getElementById("deployMode_div");
        if (devMode) {
                console.log("Development mode");
                devModeDiv.style.display = "block";
                deployModeDiv.style.display = "none";
        } else {
                console.log("Deployment mode");
                devModeDiv.style.display = "none";
                deployModeDiv.style.display = "block";
        }

        document.getElementById("DEV_CONFIG_BTN").onclick = toggleDevConfig;

        let configDiv =  document.getElementById("deploy_config_div");
        configDiv.style.display = "none"
        document.getElementById("DEPLOY_CONFIG_BTN").onclick = toggleDeployConfig;

        let maDiv =  document.getElementById("ma_dev_div");
        maDiv.style.display = "none"
        document.getElementById("MA_BTN").onclick = toggleMA;

        let inputsDiv =  document.getElementById("inputs_div");
        inputsDiv.style.display = "none"
        document.getElementById("INPUTS_BTN").onclick = toggleInputs;


        let outputsDiv =  document.getElementById("outputs_div");
        outputsDiv.style.display = "none"
        document.getElementById("OUTPUTS_BTN").onclick = toggleOutputs;

        //document.getElementById("ALLDIMENSIONS").onclick = getAllDimensions;       
        //document.getElementById("ALLCUBES").onclick = getAllCubes;       
        document.getElementById("GETFROMPA").onclick = function() {getFromPA('GETFROMPA');}; 
        document.getElementById("PUSHTOWS").onclick = createProjectAndPushToWS; 
        document.getElementById("OPENWS").onclick = openWS;                 

        document.getElementById("PUSHTOPA").onclick = function() {pushToPA('PUSHTOPA')};   ; 

        
        getConfig(workspace);       

};
