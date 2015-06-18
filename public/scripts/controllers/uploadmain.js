'use strict';

var uploadApp = angular.module('uploadApp',[]);

uploadApp.controller('bodyController', ['$scope', function($scope) {
var bgImage = [
"https://cldup.com/oACK5v99wG.jpg",
"https://cldup.com/n6BilqD_0X.jpg",
];


        $scope.getImage = function() {
    		return "url(" + bgImage[0] + ")";
    };


}]);

uploadApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function() {
    	return $filter('lowercase')($scope.handle);
    };

}]);
