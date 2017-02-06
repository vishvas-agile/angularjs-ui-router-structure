'use strict';

angular.module('Demo')
    .directive('footnav', function() {
        return {
            templateUrl: 'scripts/directives/footnav/footnav.html',
            restrict: 'E',
            replace: true,
            controller: function($scope, $rootScope) {

            }
        }
    });
