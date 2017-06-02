'use strict';

describe('Controller: TrendsCtrl', function () {

  // load the controller's module
  beforeEach(module('SportsGeeksApp'));

  var TrendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrendsCtrl = $controller('TrendsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TrendsCtrl.awesomeThings.length).toBe(3);
  });
});
