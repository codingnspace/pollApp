(function() {
	'use strict';
	angular.module('app')
	.controller('PollDetailController', PollDetailController);

	function PollDetailController($state, $stateParams,HomeFactory) {
		var vm = this;
    // vm.newBlog = {};
    // if(!$stateParams.id) $state.go('Home');
    HomeFactory.getPollById($stateParams.id).then(function(res) {
      vm.poll = res;
    });

var options = document.getElementsByTagName('input');

for (var i = 0; i < options.length; i++) {
    if (options[i].type === 'radio' && options[i].checked) {
        // get value, set checked flag or do whatever you need to
         vm.poll.option[i].count ++;
    }
}
	}
})();
