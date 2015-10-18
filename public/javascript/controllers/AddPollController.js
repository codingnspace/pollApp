(function() {
	'use strict';
	angular.module('app')
	.controller('AddPollController', AddPollController);

	function AddPollController($state,HomeFactory) {
		var vm = this;

    vm.newPoll = {};
		vm.newPoll.option = [];

vm.addPoll = function(){
  HomeFactory.addPoll(vm.newPoll).then(function(){
    $state.go('Home');
  });
};

	}
})();
