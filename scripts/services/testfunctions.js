'use strict';

/**
 * @ngdoc service
 * @name tetsProjectApp.TestFunctions
 * @description
 * # TestFunctions
 * Factory in the tetsProjectApp.
 */
angular.module('tetsProjectApp')
    .factory('TestFunctions', function () {
        // Service logic
        // ...

        var TestFunctions = function(){
            this.p1 = 'parm 1';
            this.data = {};
        }

        TestFunctions.prototype.testFunct = function(){
            return this.p1;
        }

        TestFunctions.prototype.testFunct1 = function(data){
            return data ? true : false;
        }

        return TestFunctions;
    });
