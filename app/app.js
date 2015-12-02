var angular=require('angular');
var MainController = require('./controllers/MainController');

var app=angular.module('app',[])

/*
app.controller('MainCtr',function($scope){
	$scope.message='Angular is working';
})
	*/

app.controller('MainCtr', ['$scope',MainController]);