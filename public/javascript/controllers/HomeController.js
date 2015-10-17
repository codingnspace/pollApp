(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	function HomeController(HomeFactory) {
		var vm = this;

	HomeFactory.getPolls().then(function(res){
		vm.poll = res;
	});
	}
})();
