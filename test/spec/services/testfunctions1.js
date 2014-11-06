'use strict';

describe('Service: TestFunctions1', function () {

    // load the service's module
    beforeEach(module('tetsProjectApp'));

    // instantiate service
    var TestFunctions1,
        testFunctions1;
    beforeEach(inject(function (_TestFunctions1_) {
        TestFunctions1 = _TestFunctions1_;
        testFunctions1 = new TestFunctions1();
    }));

    it('should do something', function () {
        console.log(TestFunctions1);
        expect(!!testFunctions1).toBe(true);
    });

    it('should be parm 1', function () {
        expect(testFunctions1.p1).toBe('parm 1');
    });

    it('should be parm 1', function () {
        expect(testFunctions1.testFunct()).toBe('parm 1');
    });

    it('should be true if data', function () {
        expect(testFunctions1.testFunct1('asd')).toBe(true);
    });

    it('should be url if data', function () {
        expect(testFunctions1.testUrl('asd')).toBe('asd');
    });

    it('GlobalFunction param should be "The test param of global function"', function () {
        expect(testFunctions1.test.parm1).toBe('The test param of global function');
    });

    it('GlobalFunction function should be true', function () {
        expect(testFunctions1.test.simpleFunction()).toBeTruthy();
    });
});
