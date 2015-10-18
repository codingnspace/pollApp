(function() {
	'use strict';
	angular.module('app')
	.controller('ResultsController', ResultsController);

	function ResultsController($state, $stateParams,HomeFactory) {
		var vm = this;
	  vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	  vm.data = [300, 500, 100];


			// if(!$stateParams.id) $state.go('Home');
			HomeFactory.getPollById($stateParams.id).then(function(res) {
				vm.pollResults = res;
			});

vm.addResults = function(){
		HomeFactory.putResults(vm.pollResults).then(function(){
			$state.go('Results');
		}	);
			};

}
})();
