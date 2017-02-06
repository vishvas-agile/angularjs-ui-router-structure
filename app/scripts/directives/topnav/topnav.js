'use strict';

angular.module('Demo')
    .directive('topnav', function() {
        return {
            templateUrl: 'scripts/directives/topnav/topnav.html',
            restrict: 'E',
            replace: true,
            controller: function($scope, $rootScope, $state) {

                $scope.clickOnLogout = function(){
                    $state.go('login');
                }
            }
        }
    });
