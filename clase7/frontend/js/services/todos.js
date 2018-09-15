angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('https://api.raul.suestra.io/api');
			},
			create : function(todoData) {
				return $http.post('https://api.raul.suestra.io/api', todoData);
			},
			delete : function(id) {
				return $http.delete('https://api.raul.suestra.io/api' + id);
			}
		}
	}]);
