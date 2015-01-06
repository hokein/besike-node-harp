var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');

module.exports = function(path) {
  var app = connect();
  app.use(serveStatic(path)).use(jade(path));
  return app;
}
