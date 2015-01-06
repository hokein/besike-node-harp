var connect = require('connect');
var path = require('path');
var serveStatic = require('serve-static');
var jade = require('./lib/processor/jade');
var less = require('./lib/processor/less');

function rejuctSourceFiles(req, res, next) {
  if (path.extname(req.url) == '.jade' ||
      path.extname(req.url) == '.less') {
    res.statusCode = 404;
    res.end();
  } else {
    next();
  }
}

module.exports = function(path) {
  var app = connect();
  app.use(function(req, res, next) {
    if (req.url == '/')
      req.url = '/index.html';
    next();
  }).use(rejuctSourceFiles).use(serveStatic(path)).use(jade(path)).use(less(path));
  return app;
}
