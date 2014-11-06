'use strict';

describe('Service: TestFunctions', function () {

    // load the service's module
    beforeEach(module('tetsProjectApp'));

    // instantiate service
    var TestFunctions,
        testTestFunctions;
    beforeEach(inject(function (_TestFunctions_) {
        TestFunctions = _TestFunctions_;
        testTestFunctions = new TestFunctions();
    }));

    it('should do something', function () {
        expect(!!TestFunctions).toBe(true);
    });

    it('should be parm 1', function () {
        expect(testTestFunctions.testFunct()).toBe('parm 1');
    });

    it('should be true if data', function () {
        expect(testTestFunctions.testFunct1('asd')).toBe(true);
    });
});
