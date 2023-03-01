var http = require('http');
const { title } = require('process');
var fs = require('fs');

http.createServer(function (req, res) {
  
 
  
    fs.mkdir('controller', function (err) {
        if (err) throw err;
        console.log('created : controller');
      });
      fs.mkdir('model', function (err) {
        if (err) throw err;
        console.log('created : model');
      });
      fs.mkdir('view', function (err) {
        if (err) throw err;
        console.log('created : view');
      });
      
  
  res.end();
}).listen(8080);
