angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('https://api.steph.idmatec.com/api');
			},
			create : function(todoData) {
				return $http.post('https://api.steph..idmatec.com/api', todoData);
			},
			delete : function(id) {
				return $http.delete('https://api.steph.idmatec.com/api?id=' + id);
			}
		}
	}]);
