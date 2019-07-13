var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, appServices) {
  $scope.firstName= "John";
  $scope.lastName= "Doe";
  $scope.products = ["Milk", "Bread", "Cheese"];
  $scope.deviceRegistration ={};
  
  $scope.saveDeviceForm = function(){
	  
	  console.log($scope.deviceRegistration);
	  appServices.saveDeviceRegistration();
	  
  }
  
  

});

app.factory('appServices', function($http) {
	var baseUrl = "/sdfd";
	return{
		saveDeviceRegistration :function (){
			console.log("inside factory");
			return ;
		}
	}
		
	});