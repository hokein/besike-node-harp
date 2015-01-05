var connect = require('connect');
var serveStatic = require('serve-static')

module.exports = function(path) {
  console.log(path);
  var app = connect();
  app.use(serveStatic(path));
  return app;
}
