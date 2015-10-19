(function() {
	'use strict';
	angular.module('app')
	.controller('ResultsController', ResultsController);

	function ResultsController($state, $stateParams,HomeFactory) {
		var vm = this;
	  vm.labels = ["Yes", "No", "Maybe so"];
	  vm.data = [3,1,9];


			// if(!$stateParams.id) $state.go('Home');
			HomeFactory.getResultsById($stateParams.id).then(function(res) {
				vm.pollResults = res;
			});

vm.addResults = function(){
	for (var i = 0; i < vm.pollResults.option.length; i++) {
			vm.labels.push(vm.pollResults.option[i].title);
			vm.data.push(vm.pollResults.option[i].count);
					}
};
}
})();
