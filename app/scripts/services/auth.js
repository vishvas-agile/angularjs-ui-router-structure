'use strict';

(function() {
    angular.module('Demo').service('Authentication', function() {
        return {
            isUserLoggedIn: function($q, $state, $rootScope, $timeout, UserFactory) {
                var deferred = $q.defer();

                // UserFactory.checkAuth()
                //     .success(function(res) {
                //         console.log('success', res);
                //         deferred.resolve({ message: 'success' });
                //     })
                //     .error(function(res) {
                //         console.log('error', res);
                //         deferred.reject();
                //         $state.go('login');
                //     });
                deferred.resolve({ message: 'success' });

                return deferred.promise;
            },

            hasBeenUserLoggedIn: function($q, $state, $rootScope, $timeout, UserFactory) {
                var deferred = $q.defer();

                deferred.resolve();

                return deferred.promise;
            }
        };
    });
})();
