'use strict';

(function() {

    angular.module('Demo')
        .factory('UserFactory', function($http) {
            return {
                checkAuth: function() {
                    return $http.get('http://google.com');
                }
            }
        });

})();
