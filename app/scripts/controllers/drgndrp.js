'use strict';

/**
 * @ngdoc function
 * @name tetsProjectApp.controller:DrgndrpCtrl
 * @description
 * # DrgndrpCtrl
 * Controller of the tetsProjectApp
 */
angular.module('tetsProjectApp')
    .controller('DrgndrpCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.Tomato = {
            kind: 'tomato',
            value: 25
        };

        $scope.Projects = [
            {
                kind: 'project',
                title: 'project 1'
            },
            {
                kind: 'project',
                title: 'project 2'
            },
            {
                kind: 'project',
                title: 'project 3'
            },
            {
                kind: 'project',
                title: 'project 4'
            }
        ];

        $scope.Tasks = [
            {
                kind: 'task',
                title: 'task 1',
                project: null,
                tomatos: 0,
                state: 'unsorted'
            },
            {
                kind: 'task',
                title: 'task 2',
                project: null,
                tomatos: 0,
                state: 'unsorted'
            }
        ];




    });
