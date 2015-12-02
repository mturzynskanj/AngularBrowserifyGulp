var http=require('http');

var express=require('express');

var app=express();

app.use(express.static('public'));

app.post('/',function(req,res){
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/',function(req,res){
	res.sendFile(__dirname + '/' + 'index.html');
});

var server=app.listen(8085,function(){});