'use strict';

describe('Controller: AboutCtrl', function () {

    // load the controller's module
    beforeEach(module('tetsProjectApp'));

    var AboutCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AboutCtrl = $controller('AboutCtrl', {
            $scope: scope
        });
    }));
    describe('About controller nonscope units test', function(){
        it('should be true as non scope function result', function(){
            expect(AboutCtrl.testFunct()).toBe(true);
        })
    })

    describe('About controller scope units test', function(){
        it('should be true as scope function result', function(){
            expect(scope.scopeFunct()).toBe(true);
        })
    })
});
