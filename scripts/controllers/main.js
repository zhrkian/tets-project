'use strict';

/**
 * @ngdoc function
 * @name tetsProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tetsProjectApp
 */
function MainCtrlResolve(){
  return {
    t1 : function(){
      return false;
    },
    t2 : function(){
      return false;
    }
  }
};

angular.module('tetsProjectApp')
  .controller('MainCtrl', function ($scope, $http, TestFunctions, TestFunctions1) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //$scope.opa = function(){
    //  $http({
    //    method: 'POST',
    //    url: '/players/login',
    //    data: {}
    //  }).then(function(response){
    //    console.log(response);
    //  }, function(error){
    //    console.log(error);
    //  });
    //};
    //console.log('Here');
    //var t1 = new TestFunctions();
    //var t2 = new TestFunctions1();
	//
    //console.log(t1);
    //console.log(t2);
  });
