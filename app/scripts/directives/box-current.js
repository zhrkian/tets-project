'use strict';

/**
 * @ngdoc directive
 * @name tetsProjectApp.directive:box
 * @description
 * # box
 */
angular.module('tetsProjectApp')
    .directive('boxCurrent', function () {
        return {
            templateUrl: 'views/box-current.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {

                scope.curTask = null;

                scope.onDropComplete = function(data, evt){
                    console.log('onDropComplete');
                    console.log(data);
                    scope.curTask = data;
                }

                scope.onDragSuccess = function(data, evt){
                    console.log('onDragSuccess');
                    console.log(data);
                }

            }
        };
    });
