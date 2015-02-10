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
                    console.log('Current Drop Okey');

                    data.tomatos ?
                        (function(){
                            scope.curTask ?
                                scope.curTask.active = false : true;
                            scope.curTask = data;
                            scope.curTask.active = true;
                        })(): alert('Будь мужиком!!! Добавь помидоров!');
                }
            }
        };
    });
