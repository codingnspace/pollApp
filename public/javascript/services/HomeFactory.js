(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);


	function HomeFactory($http, $q) {
		var o = {};

o.getPolls = function(){
	var q = $q.defer();
	$http.get('/api/v1/polls')
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

		return o;
	}
})();
