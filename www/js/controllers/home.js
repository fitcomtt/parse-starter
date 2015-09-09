/**
 * Created by Osei Fortune on 7/2/15.
 */
angular.module('parse-starter.controllers')
    .controller('HomeCtrl',function ($scope,$state,$ionicPopup) {

        $scope.currentUser = Parse.User.current()._serverData;


        $scope.back = function () {
            $ionicHistory.goBack();
        };

        $scope.logout = function () {

            $ionicPopup.confirm({
                title: 'LOG OUT',
                template: 'Are you sure?',
                okType: 'button-balanced'
            }).then(function(res) {
                if(res) {
                    Parse.User.logOut();
                    $state.go('login');
                } else {
                }
            });



        };
    });