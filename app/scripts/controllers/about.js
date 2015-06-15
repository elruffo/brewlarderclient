'use strict';

/**
 * @ngdoc function
 * @name brewlarderclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the brewlarderclientApp
 */
angular.module('brewlarderclientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
