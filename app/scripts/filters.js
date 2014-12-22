'use strict';
var appFilters = angular.module('jfwSchedule.filters', []);


appFilters.filter('dateStr', function() {
  return function(input) {
    return Date.parse(input);
  };
});

appFilters.filter('homeAway', function() {
  return function(input) {
    return (input === 'true') ? 'Home' : 'Away';
  };
});
