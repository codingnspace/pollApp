(function() {
	'use strict';
	angular.module('app')
	.controller('PollDetailController', PollDetailController);

	function PollDetailController($state, $stateParams,HomeFactory) {
		var vm = this;
    // vm.newBlog = {};
    if(!$stateParams.id) $state.go('Home');
    HomeFactory.getPollById($stateParams.id).then(function(res) {
      vm.poll = res;
    });
	}
})();
