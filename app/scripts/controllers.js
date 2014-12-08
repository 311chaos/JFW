'use strict';
angular.module('MobileTest.controllers', [])

.controller('HomeCtrl', function($scope) {
    $scope.doRefresh = function() {
      //$http.get('/new-items')
      //  .success(function (newItems) {
      //    $scope.items = newItems;
      //  })
      //  .finally(function () {
      //    // Stop the ion-refresher from spinning
      //    $scope.$broadcast('scroll.refreshComplete');
      //  });

      setTimeout(function() {
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000);
    };
})

.controller('CalCtrl', function($scope, CalendarSrv) {
  $scope.events = CalendarSrv.all();

})

.controller('CalDetailCtrl', function($scope, $stateParams, CalendarSrv) {
  $scope.event = CalendarSrv.get($stateParams.eventId);
})

.controller('InfoCtrl', function() {

});
