module.exports = makeLess;

var less = require('less');
var fs = require('fs');
var path = require('path');

function makeLess(root) {
  return function(req, res, next) {
    if (path.extname(req.url) == '.css') {
      fs.readFile(root + '/' + path.basename(req.url, '.css') + '.less',
          { encoding: 'utf8' }, function(err, data) {
            if (err) {
              next();
              return;
            }
            less.render(data, function(err, output) {
              if (err) {
                next();
                return;
              }
              res.end(output);
            });
      });
    }
  }
}
