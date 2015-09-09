/**
 * Created by Osei Fortune on 7/2/15.
 */
angular.module('parse-starter.controllers')
    .controller('SignupCtrl', function ($scope, Core) {

    $scope.user = {};
        $scope.$watchGroup(['user.username','user.fn','user.ln','user.email','user.password'], function (newVal) {

            var valid = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);


           var user = newVal[0] != undefined && newVal[0].length > 4,
            fn = newVal[1] != undefined && newVal[1].length > 0,
            ln = newVal[2] != undefined && newVal[2].length > 0,
            email =!!valid.test(newVal[3]),
            password =newVal[4] != undefined && newVal[4].length > 4;

            $scope.ready = !!(user && fn && ln && email && password);
        });

        $scope.signup = function (user) {
            Core.userSignup(user.username, user.fn, user.ln, user.email, user.password);
        };


    });
