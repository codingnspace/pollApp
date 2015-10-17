(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state("APoll",{
			url: '/Polls/:id',
			templateUrl:'views/partPoll.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
