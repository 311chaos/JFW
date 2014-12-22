'use strict';
var appServices = angular.module('jfwSchedule.services', []);

/**
 * A simple example service that returns some data.
 */
appServices.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruffer' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
});


appServices.factory('CalendarSrv', function() {
  var calData = {
    events: [{
      type: 'game',
      date: 'December 6, 2014 9:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'true'
    }, {
      type: 'game',
      date: 'December 13, 2014 11:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'true'
    }, {
      type: 'game',
      date: 'December 20, 2014 12:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'false'
    }, {
      type: 'game',
      date: 'January 10, 2015 12:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'false'
    }, {
      type: 'game',
      date: 'January 17, 2015 11:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'false'
    }, {
      type: 'game',
      date: 'January 24, 2015 10:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'false'
    }, {
      type: 'game',
      date: 'January 31, 2015 12:00:00',
      location: 'Joel P. Jensen',
      home: 'false'
    }, {
      type: 'game',
      date: 'February 7, 2015 9:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'true'
    }, {
      type: 'pictures',
      date: 'December 13, 2014 12:00:00',
      location: 'Oquirrh Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'December 3, 2014 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'December 10, 2014 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'January 7, 2015 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'January 14, 2015 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'January 21, 2015 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'January 28, 2015 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }, {
      type: 'practice',
      date: 'February 4, 2015 20:00:00',
      location: 'South Hills Middle',
      home: 'true'
    }]
  };

  return {
    all: function() {
      return _.sortBy(calData.events, function(value) {return new Date(value.date);});
    },
    get: function(date) {
      return _.where(calData.events, {'date': date})[0];
    }
  };
});
