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
                    data && scope.selector[data.kind] ?
                        scope.task[data.kind] = scope.selector[data.kind](data) : false;
                }

                scope.onDragSuccess = function(data, evt){
                    console.log('onDragSuccess');
                    console.log(data);
                }

                scope.deleteTomato = function(data, evt){
                    console.log(evt);
                    console.log('Delete tomato!');
                    scope.task.tomatos--;
                }

                scope.selector = {};
                scope.selector.project = function(value){
                    console.log('selector product');
                    return value;
                }

                scope.getNumber = function(num) {
                    return new Array(num);
                }

                scope.selector.tomato = function(value, key){
                    console.log('selector tomato');
                    scope.task.tomatos++;
                    console.log(scope.task.tomatos);
                    return ;
                }
            }
        };
    });
