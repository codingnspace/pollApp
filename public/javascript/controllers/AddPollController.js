(function() {
	'use strict';
	angular.module('app')
	.controller('AddPollController', AddPollController);

	function AddPollController($state,HomeFactory) {
		var vm = this;

    vm.newPoll = {};
		vm.newPoll.option = [];
		// vm.newPoll.option.count = 0;

vm.addPoll = function(){
  HomeFactory.addPoll(vm.newPoll).then(function(res){
    $state.go('Home');
  });
};

	}
})();
