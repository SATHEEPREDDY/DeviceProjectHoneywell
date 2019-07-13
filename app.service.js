var app = angular.module('myApp', []);
app.factory('appServices', function($scope, $http) {
	var baseUrl = "/sdfd";
	return{
		saveDeviceRegistration :function (){
			console.log("inside factory");
		}
		
		
	}
	
	
	
});
