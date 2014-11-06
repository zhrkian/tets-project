'use strict';

/**
 * @ngdoc service
 * @name tetsProjectApp.TestFunctions1
 * @description
 * # TestFunctions1
 * Factory in the tetsProjectApp.
 */
angular.module('tetsProjectApp')
    .factory('TestFunctions1', function (TestFunctions) {

        var TestFunctions1 = TestFunctions;

        var test = new GlobalFunction();

        TestFunctions1.prototype.test = test;

        TestFunctions1.prototype.testUrl = function(url){
            return url;
        }

        return TestFunctions1;
    });
