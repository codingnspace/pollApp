(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController($state,HomeFactory,UserFactory) {
		var vm = this;
    vm.user = {};

    vm.registerUser = function(){
      UserFactory.registerUser(vm.user).then(function(res){
        $state.go("Home");
      });
    };

vm.loginUser = function(){

};
	}
})();
