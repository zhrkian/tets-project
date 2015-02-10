'use strict';

/**
 * @ngdoc function
 * @name tetsProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tetsProjectApp
 */
angular.module('tetsProjectApp')
    .controller('AboutCtrl', function ($scope, $firebase, TestFunctions, TestFunctions1) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var ref = new Firebase("https://brilliant-fire-6659.firebaseio.com/-JYAaapZurfEAhzTM6tH");
        var sync = $firebase(ref);

        ref.on('value', function(testValue){
            console.log(testValue.val());
        }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            }
        );

        console.log(sync.$asObject());

//        var ref1 = new Firebase("https://brilliant-fire-6659.firebaseio.com/");
//
//
//        var authClient = new FirebaseAuthClient(ref1, function(error, user) {
//            if (error) {
//                alert(error);
//                return;
//            }
//            if (user) {
//                // User is already logged in.
////                doLogin(user);
//            } else {
//                // User is logged out.
////                showLoginBox();
//            }
//        });
//
//        authClient.createUser('r.zhygalkin@gmail.com', 'paaaasssswwwwooord', function(error,  user) {
//            if (!error) {
//                console.log(user);
//            } else {
//                alert(error);
//            }
//        });
//        // replace the entire node with new data
//        sync.$set({foo: "bar"});
//
//        // add a new child node
//        sync.$push({hello: "world"}).then(function(newChildRef) {
//            console.log("added record with id " + newChildRef.name());
//        });
//
//        // remove a child node (by passing its key)
//        sync.$remove("foo");
//// replace some child nodes but leave the rest alone
//        var changedData = {foo: "bar", bar: {hello: "world"}, baz: null};
//        sync.$update(changedData);


        var local = this;
        local.testFunct = function(){
            return true;
        };

        $scope.scopeFunct = function(){
            return local.testFunct();
        }
        var t1 = new TestFunctions();
        var t2 = new TestFunctions1();

        console.log(t1.test.parm1);
        console.log(t2.test.someFunction());
    });
