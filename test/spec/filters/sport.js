'use strict';

describe('Filter: sport', function () {

  // load the filter's module
  beforeEach(module('SportsGeeksApp'));

  // initialize a new instance of the filter before each test
  var sport;
  beforeEach(inject(function ($filter) {
    sport = $filter('sport');
  }));

  it('should return the input prefixed with "sport filter:"', function () {
    var text = 'angularjs';
    expect(sport(text)).toBe('sport filter: ' + text);
  });

});
