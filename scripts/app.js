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
  .config(function($provide){
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
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
  })
  .run(function($httpBackend){ //}, ENV){
    //$httpBackend.whenPOST('/players/login').respond(function(method, url, data){
    //  return [200, {ivan: ''}, {}];
    //});
	//
    //// Catch-all pass through for all other requests
    //$httpBackend.whenGET(/.*/).passThrough();
    //$httpBackend.whenPOST(/.*/).passThrough();
    //$httpBackend.whenDELETE(/.*/).passThrough();
    //$httpBackend.whenPUT(/.*/).passThrough();
  });
