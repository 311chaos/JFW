'use strict';
var appFilters = angular.module('MobileTest.filters', []);


appFilters.filter('dateStr', function() {
  return function(input) {
    return Date.parse(input);
  };
});
