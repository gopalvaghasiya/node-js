// i will make a changes because of git tech
var http=require('http');
var fs=require('fs');

var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream=fs.createWriteStream(__dirname+'/writeme.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk recived');
    myWriteStream.write(chunk);
});
