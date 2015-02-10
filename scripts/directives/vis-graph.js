'use strict';

/**
 * @ngdoc directive
 * @name tetsProjectApp.directive:visGraph
 * @description
 * # visGraph
 */
angular.module('tetsProjectApp')
    .directive('visGraph', function () {
        return {
            template: '<div id="mytimeline"></div><button ng-click="change()">aaa</button>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                var container = element.find('div')[0];
                console.log(container);
                // Create a DataSet with data (enables two way data binding)
                var data = [

                    {id: 'a', content: 'Бухаем', start: '2014-04-14', end: '2014-04-28', type: 'background'},
                    {id: 'b', content: 'Отходим', start: '2014-04-29', end: '2014-04-30',
                        type: 'background', className: 'red'},
                    {id: 'c', content: 'Пашем', start: '2014-05-01', end: '2014-05-06', type: 'background'},
                    {id: 1, group: 1,
                        content: '<p>aaaaaa</p><i class="glyphicon-cloud-download"></i>item 1',
                        start: '2014-04-20',
                        end: '2014-04-25'},
                    {id: 2, group: 2, content: 'item 2', start: '2014-04-14', end: '2014-04-19'},
                    {id: 3, group: 3,
                        content: '<a href="http://google.com">Хелло чО!item 3</a>', start: '2014-04-18',
                        end: '2014-04-25'},
                    {id: 4, group: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
                    {id: 5, group: 5, content: 'item 5', start: '2014-04-18', end: '2014-05-05'},
                    {id: 6, group: 6, content: 'item 6', start: '2014-04-17', end: '2014-05-06'}
                ];

                // Configuration for the Timeline
                var options = {
                    stack: false,
//                    start: new Date('2014-04-14'),
//                    end: new Date('2014-05-06'),
                    showCustomTime: true,
                    zoomable: false,
                    padding: 50,
//                    margin: {
//                        item: 10, // minimal margin between items
//                        axis: 5   // minimal margin between items and the axis
//                    },
                    orientation: 'bottom'
                };


                var groups = new vis.DataSet([
                    {id: 1, content: '<p class="text-muted">Truck&nbsp;1</p>'},
                    {id: 2, content: '<p class="text-danger">Truck&nbsp;1</p>'},
                    {id: 3, content: '<p class="text-primary">Truck&nbsp;1</p>'},
                    {id: 4, content: 'Truck&nbsp;4'},
                    {id: 5, content: '<p class="text-danger">Truck&nbsp;5</p>'},
                    {id: 6, content: '<p class="text-primary">Truck&nbsp;6</p>'}
                ]);

                // Create a Timeline
                var timeline = new vis.Timeline(container, null, options);
                timeline.setGroups(groups);
                timeline.setItems(data);
                timeline.setCustomTime(new Date('2014-04-14'));

                scope.change = function(){
                    groups = new vis.DataSet([
                        {id: 1, content: '<h1 class="text-muted">Truck&nbsp;1</h1>'},
                        {id: 2, content: '<h1 class="text-danger">Truck&nbsp;1</h1>'}
                    ]);
                    data = [
                        {id: 1, group: 1,
                            content: '<h1>aaaaaa</h1><i class="glyphicon-cloud-download"></i>item 1',
                            start: '2014-04-20'},
                        {id: 2, group: 2, content: 'item 2', start: '2014-04-14'},
                        {id: 3, group: 3, content: '<h2>Хелло чО!</h2>item 3', start: '2014-04-18'}
                    ];

                    timeline.setGroups(groups);
                    timeline.setItems(data);
                }
            }
        };
    });
