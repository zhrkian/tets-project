'use strict';

/**
 * @ngdoc directive
 * @name tetsProjectApp.directive:testModal
 * @description
 * # testModal
 */
angular.module('tetsProjectApp')
    .directive('testModal', function () {
        return {
            templateUrl: 'modal.html',
            restrict: 'AE',
            link: function postLink(scope, element) {

                element.bind('click', function(){
                    console.log('sdsdf');
                    var modalInstance = $modal.open({
                        templateUrl: 'modal.html',
                        controller: function ($scope, $modalInstance) {
                            $scope.cancel = function () {
                                $modalInstance.dismiss('cancel');
                            };
                        }
                    });
                    modalInstance.result.then(function () {}, function () {});
                })

                scope.open = function () {

                };
            }
        };
    });
