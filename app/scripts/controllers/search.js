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
    search.success(function(data) {
      $scope.beers = data.data;
    });
  });
