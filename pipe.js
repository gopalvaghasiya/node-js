// i will make a changes because of git learning

//pipe
var http=require('http');
var fs=require('fs');

var server=http.createServer(function(req,res){
    console.log('request URL '+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(res);
    
});

server.listen(3000,'127.0.0.1');
console.log('lisning 3000 port');
