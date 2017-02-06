'use strict';

(function() {
    var App = angular.module('Demo', [
        'ui.router',

        'Demo.Pages'
    ]);

    App
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('boxed', {
                    abstract: true,
                    url: '',
                    templateUrl: 'layout/boxed.html',
                })
                .state('pages', {
                    abstract: true,
                    url: '',
                    templateUrl: 'layout/page.html',
                });
        });

})();
