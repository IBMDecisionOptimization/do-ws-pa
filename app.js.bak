/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use('/dev/', express.static(__dirname + '/public'));
app.use('/deploy/', express.static(__dirname + '/public'));

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

// parse application/json
app.use(bodyParser.json({limit: '50mb'}))

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var dowsjs = require('do-ws-js/dowsjs');

dowsjs.routeConfig(router);

dowsjs.routePA(router);

dowsjs.routeWS(router);

dowsjs.routeScenario(router);

dowsjs.routeSolve(router);

dowsjs.routeScore(router);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/dev/api', router);
app.use('/deploy/api', router);

// // get the app environment from Cloud Foundry
// var appEnv = cfenv.getAppEnv();

// // start server on the specified port and binding host
// app.listen(appEnv.port, '0.0.0.0', function() {
//   // print a message when the server starts listening
//   console.log("server starting on " + appEnv.url);
// });


var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};


// your express configuration here

var httpServer = http.createServer(app).listen(8080);
var httpsServer = https.createServer(credentials, app).listen(8443);
