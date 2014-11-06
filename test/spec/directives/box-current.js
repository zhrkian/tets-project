'use strict';

describe('Directive: boxCurrent', function () {

  // load the directive's module
  beforeEach(module('tetsProjectApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<box-current></box-current>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the boxCurrent directive');
  }));
});
