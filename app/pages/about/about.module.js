'use strict';

(function() {
    angular.module('Demo.Pages.About', [])
        .config(function($stateProvider, $urlRouterProvider) {

            var self = {};
            self.isUserLoggedIn = function() {
                return ['$q', '$state', '$rootScope', '$timeout', 'Authentication', 'UserFactory', function($q, $state, $rootScope, $timeout, Authentication, UserFactory) {
                    return Authentication.isUserLoggedIn($q, $state, $rootScope, $timeout, UserFactory);
                }];
            };

            $urlRouterProvider.otherwise('/about');

            $stateProvider
                .state('about', {
                    url: '/about',
                    parent: 'pages',
                    templateUrl: 'pages/about/about.html',
                    controller: 'AboutController',
                    resolve: {
                        User: self.isUserLoggedIn()
                    }
                });
        });
})();
