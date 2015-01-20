var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService){
	$scope.users = [];
	$scope.getUsers = function() {
		$scope.users = mainService.getUsers();
	};

	$scope.getUsers();
});