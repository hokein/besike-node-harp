#!/usr/bin/env node

var miniHarp = require('../');
var parseArgs = require('minimist');

var app = miniHarp();
var options = parseArgs(process.argv.slice(2));
var port = options.port || 4000;

console.log("Starting mini-harp on http://localhost:" + port);
app.listen(port);
