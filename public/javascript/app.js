(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state("PollDetails",{
			url: '/Poll/:id',
			templateUrl:'views/polldetails.html'
		}).state("Add",{
			url: '/add',
			templateUrl: 'views/add.html',
		});
		$urlRouterProvider.otherwise('/');
	}
})();
