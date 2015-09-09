/**
 * Created by Osei Fortune on 7/2/15.
 */
angular.module('parse-starter.controllers')
  .controller('LoginCtrl', function ($scope, Core, $ionicHistory,$rootScope) {


    $scope.user = {};
    $ionicHistory.nextViewOptions({
      disableBack: true
    });

    $scope.$watchGroup(['user.username', 'user.password'], function (newVal) {
      var user = newVal[0] != undefined && newVal[0].length > 4,
        password = newVal[1] != undefined && newVal[1].length > 4;

      $scope.ready = !!(user && password);
    });


    $scope.login = function (user) {
      Core.userLogin(user.username, user.password);
    };


    //Todo
/*    $scope.fbLogin = function () {

      Parse.FacebookUtils.logIn(null, {
        success: function(user) {
          if (!user.existed()) {
            alert("User signed up and logged in through Facebook!");
          } else {
            alert("User logged in through Facebook!");
          }
        },
        error: function(user, error) {
          console.log(user,error)
        //  alert("User cancelled the Facebook login or did not fully authorize.");
        }
      });
    };*/


  });
