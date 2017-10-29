var http=require('http');

var server=http.createServer(function(req,res){
    console.log('request URL '+req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey gopal');
});

server.listen(3000,'127.0.0.1');
console.log('lisning 3000 port');
