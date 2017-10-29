// some function

/*var time=0;
var timer=setInterval(function(){
  time+=2;
  console.log(time+'second pass');
  if(time>5){
    clearInterval(timer);
  }
},2000);
*/

// global object
/*console.log(__dirname);
console.log(__filename);
*/

// normal function
/*
function sayHi(){
  console.log('hi gopal');
}

sayHi();

function callFunction(fun){
  fun();
}


//function expression
var sayBye=function(){
  console.log('bye');
};

callFunction(sayBye);
*/

//Module
/*
var stuff=require('./stuff');
console.log(stuff.cnt(['gopal','jb','gp']));

console.log(stuff.addr(5,6));
console.log(stuff.addr(stuff.pi,5));
*/

//Event
/*
var events=require('events');

var myEmitter=new events.EventEmitter();

myEmitter.on('someEvent',function(msg){
  console.log(msg);
});

myEmitter.emit('someEvent','this is gopal vaghasiya');
*/

//part:-2
/*
var events=require('events');
var util=require('util');

var Person=function(name){
  this.name=name;
};

util.inherits(Person,events.EventEmitter);

var gp=new Person('gp');
var jb=new Person('jb');
var rj=new Person('rj');
var people=[gp,jb,rj];

people.forEach(function(Person){
  Person.on('speak',function(msg){
    console.log(Person.name +' said ' +msg);
  });
});

gp.emit('speak','hey baby');
jb.emit('speak','hey topi');
*/

//file reading
//Synchronize
/*var fs=require('fs');
var readme=fs.readFileSync('readme.txt','utf8');
//console.log(readme);
fs.writeFileSync('writeme.txt',readme);
*/

//unsynchronize
/*
var fs=require('fs');

fs.readFile('readme.txt','utf8',function(err,data){
//  console.log(data);
  fs.writeFile('writeme.txt',data);
});
*/

//create and remove file sync and async

//Synchronize
//var fs=require('fs');

//fs.unlink('writeme.txt');
//fs.mkdir('gp');
//fs.rmdir('gp');
