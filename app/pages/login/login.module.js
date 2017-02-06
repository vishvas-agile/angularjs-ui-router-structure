'use strict';

(function() {
    angular
        .module('Demo.Pages.Login', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');

            var self = {};
            self.hasBeenUserLoggedIn = function() {
                return ['$q', '$state', '$rootScope', '$timeout', 'Authentication', 'UserFactory', function($q, $state, $rootScope, $timeout, Authentication, UserFactory) {
                    return Authentication.hasBeenUserLoggedIn($q, $state, $rootScope, $timeout, UserFactory);
                }];
            };

            $stateProvider
                .state('login', {
                    url: '/login',
                    parent: 'boxed',
                    templateUrl: 'pages/login/login.html',
                    controller: 'LoginController',
                    resolve: {
                        User: self.hasBeenUserLoggedIn()
                    }
                });
        });
})();
