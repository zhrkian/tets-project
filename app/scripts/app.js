'use strict';

/**
 * @ngdoc overview
 * @name tetsProjectApp
 * @description
 * # tetsProjectApp
 *
 * Main module of the application.
 */
angular
    .module('tetsProjectApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'firebase',
        'ngDraggable'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve : MainCtrlResolve()
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/drgNdrp', {
              templateUrl: 'views/drgndrp.html',
              controller: 'DrgndrpCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

