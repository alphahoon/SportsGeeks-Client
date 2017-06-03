'use strict';

describe('Directive: rank', function () {

  // load the directive's module
  beforeEach(module('SportsGeeksApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<rank></rank>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rank directive');
  }));
});
