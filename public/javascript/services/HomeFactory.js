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

o.getPollById = function(id){
	var q = $q.defer();
	$http.get('/api/v1/polls/' + id)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.sendResults = function(newResult){
	var q = $q.defer();
	$http.put('/api/v1/polls', newResult)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.getResultsById = function(id){
	var q = $q.defer();
	$http.get('/api/v1/polls/' + id)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;

};

o.addPoll = function(newPoll){
	var q = $q.defer();
	$http.post('/api/v1/polls', newPoll)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

o.getPollById = function(id){
	var q = $q.defer();
	$http.get('api/v1/polls/'  + id)
	.then(function(res){
		q.resolve(res.data);
	});
	return q.promise;
};

		return o;
	}
})();
