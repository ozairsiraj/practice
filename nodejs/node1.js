// Node JS Program to display welcome message
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello world -welcome to mean');
}).listen(8080);