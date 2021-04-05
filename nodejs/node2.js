// Node JS Program to implement simple http server
var http = require('http');
var fs = require('fs');
console.log(' Waiting for connection ....');
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) 
  {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8061);
