/**
 * Created by ruffo on 15/06/15.
 */
'use strict';

angular.module('brewlarderclientApp').factory('search', ['$http', function($http) {
  return $http.get('https://brewlarderapi.herokuapp.com/en/search?type=beer&q=orval&withBreweries=Y', {withCredentials: true})
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);
