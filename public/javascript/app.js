(function() {
	'use strict';
	angular.module('app', ['ui.router','chart.js'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state("PollDetails",{
			url: '/poll/:id',
			templateUrl:'views/polldetails.html'
		}).state("Add",{
			url: '/add',
			templateUrl: 'views/add.html',
		}).state("Results",{
			url:'/results',
			templateUrl: 'views/results.html'
		}).state("Login", {
			url: "/login",
			templateUrl: 'views/login.html'
		}).state("Register",{
			url: '/register',
			templateUrl: 'views/register.html'
		});
		// $urlRouterProvider.otherwise('/');
	}
})();
