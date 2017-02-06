'use strict';

(function() {
    angular.module('Demo.Pages.Dashboard', [])
        .config(function($stateProvider, $urlRouterProvider) {

            var self = {};
            self.isUserLoggedIn = function() {
                return ['$q', '$state', '$rootScope', '$timeout', 'Authentication', 'UserFactory', function($q, $state, $rootScope, $timeout, Authentication, UserFactory) {
                    return Authentication.isUserLoggedIn($q, $state, $rootScope, $timeout, UserFactory);
                }];
            };

            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    parent: 'pages',
                    templateUrl: 'pages/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    resolve: {
                        User: self.isUserLoggedIn()
                    }
                });
        });
})();
