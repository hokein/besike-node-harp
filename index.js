var connect = require('connect');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');
var less = require('./lib/processor/less');

module.exports = function(path) {
  var app = connect();
  app.use(function(req, res, next) {
    if (req.url == '/')
      req.url = '/index.html';
    next();
  }).use(serveStatic(path)).use(jade(path)).use(less(path));
  return app;
}
