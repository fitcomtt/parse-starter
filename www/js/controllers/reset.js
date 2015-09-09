/**
 * Created by Osei Fortune on 7/2/15.
 */
angular.module('parse-starter.controllers')
  .controller('ResetCtrl', function ($scope, Core) {

    $scope.user = {};
    $scope.$watch('user.email', function (newVal) {
      var valid = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
      $scope.ready = !!valid.test(newVal)
    });


    $scope.reset = function (email) {
      Core.userReset(email);
    };

  });
