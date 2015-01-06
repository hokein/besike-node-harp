module.exports = makeJade;

var jade = require('jade');
var fs = require('fs');
var path = require('path');

function makeJade(root) {
  return function(req, res, next) {
    if (path.extname(req.url) == '.html') {
      fs.readFile(root + '/' + path.basename(req.url, '.html') + '.jade',
          { encoding: 'utf8' }, function(err, data) {
            if (err) {
              next();
              return;
            }
            var html = jade.render(data);
            res.writeHead(200, { 'Content-Length': html.length });
            res.end(html);
      });
    } else {
      next();
    }
  }
}
