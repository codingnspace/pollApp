(function() {
	'use strict';
	angular.module('app')
	.factory('UserFactory', UserFactory);


	function UserFactory($http, $q) {
		var o = {};

o.registerUser = function(user){
  var q = $q.defer();
  $http.post('/api/v1/users/register/', user).then(function(res){
    q.resolve(res.data);
  });
  return q.promise;
};


 return o;
}
  })();
