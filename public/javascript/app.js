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
			url:'/results/:id',
			templateUrl: 'views/results.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
