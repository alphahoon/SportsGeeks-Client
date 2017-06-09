'use strict';

describe('Filter: league', function () {

  // load the filter's module
  beforeEach(module('SportsGeeksApp'));

  // initialize a new instance of the filter before each test
  var league;
  beforeEach(inject(function ($filter) {
    league = $filter('league');
  }));

  it('should return the input prefixed with "league filter:"', function () {
    var text = 'angularjs';
    expect(league(text)).toBe('league filter: ' + text);
  });

});
