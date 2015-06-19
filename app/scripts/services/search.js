/**
 * Created by ruffo on 15/06/15.
 */
'use strict';


angular.module('beerResource', ['ngResource'])
  .factory('BeerResource', ['$resource',
    function($resource){
      return $resource('http://localhost:8000/en/search?type=beer&q=:q&withBreweries=Y', {}, {
        query: {method:'GET', params:{q:'q'}, isArray:true}
      });
    }]);
