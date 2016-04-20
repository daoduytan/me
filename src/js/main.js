var app = angular.module("myPage" , ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.when('/work', {
		templateUrl: 'pages/works.html',
		controller: 'worksCtrl'
	})
	.when('/admin', {
	  templateUrl: 'pages/admin.html',
	  controller: 'adminCtrl'
	}).
	otherwise({
    templateUrl: '/'
  });
	$locationProvider.html5Mode(true);
}]);
