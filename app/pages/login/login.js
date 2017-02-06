'use strict';

(function() {

    angular.module('Demo').controller('LoginController', ['$scope', '$state', function($scope, $state) {

        $scope.clickOnLogin = function(){
        	$state.go('dashboard');
        }

    }]);

})();
