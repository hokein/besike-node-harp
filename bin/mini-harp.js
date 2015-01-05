#!/usr/bin/env node

var miniHarp = require('../');
var parseArgs = require('minimist');

var options = parseArgs(process.argv.slice(2));
var path = options['_'][0] || process.cwd();
var port = options.port || 4000;
var app = miniHarp(path);

console.log("Starting mini-harp on http://localhost:" + port);
app.use(
  function(req, res, next) {
    if (req.method == 'GET' &&
        req.url == '/current-time') {
      res.end((new Date()).toISOString());
    } else {
      next();
    }
  }
).listen(port);
