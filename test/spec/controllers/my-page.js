'use strict';

describe('Controller: MyPageCtrl', function () {

  // load the controller's module
  beforeEach(module('SportsGeeksApp'));

  var MyPageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyPageCtrl = $controller('MyPageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyPageCtrl.awesomeThings.length).toBe(3);
  });
});
