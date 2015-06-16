'use strict';

/**
 * @ngdoc function
 * @name brewlarderclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brewlarderclientApp
 */
angular.module('brewlarderclientApp')
  .controller('SearchCtrl', function ($scope, search) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.title = 'This Month\'s Bestsellers';
    $scope.beers = [];
    $scope.search_beers = function() {
      search.success(function(data) {
        $scope.title = 'This Month\'s';
        $scope.beers = data.data;
        console.log($scope.title);
        console.log($scope.beers);
      });
    };

  });
