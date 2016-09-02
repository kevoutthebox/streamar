'use strict';

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
const _ = require('lodash')
const favicon = require('serve-favicon');
const path = require('path')
const startSockets = require('./sockLogic.js');

let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let httpPort = 8000;
let httpsPort = process.env.PORT || 1337;

let server = http.createServer(app).listen(httpPort, function(){
  console.log('Listening on ' + httpPort)
});

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};


// const server = https.createServer(options, app).listen(port, function(){
  // console.log('Listening on ' + port)
// });

app.use('/', express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));


let httpsServer = https.createServer(options, app).listen(httpsPort, function(){
  console.log('Also listening on ' + httpsPort)
});

startSockets(server);

