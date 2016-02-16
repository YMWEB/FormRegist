var myApp = angular.module('formReg',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/login',{
		templateUrl:'login.html',
		controller:'Logincontroller'
	}).
	when('/register',{
		templateUrl:'register.html',
		controler:'Logincontroller'
	}).
	otherwise({
		redirectTo:'/register'
	});
}]);

myApp.controller('Logincontroller',['$scope',function($scope){
	$scope.login = function(){
		
		$scope.message = "Login"+$scope.user.email;
	};
	$scope.regist = function(){
		
		$scope.message = "Regist"+$scope.user.email;
	}
}]);

