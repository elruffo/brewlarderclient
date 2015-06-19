'use strict';

/**
 * @ngdoc function
 * @name brewlarderclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brewlarderclientApp
 */


angular.module('brewlarderclientApp')
  .controller('SearchCtrl', ['$scope', '$routeParams', 'BeerResource', function($scope, $routeParams, BeerResource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.search_beers = function() {
      $scope.beers = BeerResource.query({q: $scope.search_query});
    }
  }]);
