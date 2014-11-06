'use strict';

/**
 * @ngdoc directive
 * @name tetsProjectApp.directive:box
 * @description
 * # box
 */
angular.module('tetsProjectApp')
    .directive('box', function () {
        return {
            templateUrl: 'views/box.html',
            restrict: 'E',
            scope: {
                task: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.onDropComplete = function(data, evt){
                    console.log('onDropComplete');
                    console.log(data);
                    scope.task[data.kind] = scope.selector[data.kind](data);
                }

                scope.onDragSuccess = function(data, evt){
                    console.log('onDragSuccess');
                    console.log(data);
                }

                scope.selector = {};
                scope.selector.project = function(value){
                    console.log('selector product');
                    return value;
                }

                scope.selector.tomato = function(value){
                    console.log('selector tomato');
                    return scope.task.tomatos.push(value);
                }
            }
        };
    });
