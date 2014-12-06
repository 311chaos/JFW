'use strict';
angular.module('MobileTest.controllers', [])

.controller('HomeCtrl', function() {

})

.controller('CalCtrl', function($scope, CalendarSrv) {
  $scope.events = CalendarSrv.all();


})

.controller('CalDetailCtrl', function($scope, $stateParams, CalendarSrv) {
  $scope.event = CalendarSrv.get($stateParams.eventId);
})

.controller('InfoCtrl', function() {

});
