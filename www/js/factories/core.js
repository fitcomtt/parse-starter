/**
 * Created by Osei Fortune on 7/2/15.
 */
angular.module('parse-starter.factories')
.factory('Core', function ($ionicPopup,$state,$ionicLoading) {

        var core = {};

        core.userSignup = function (username,fn,ln,email,password) {

            var user = new Parse.User();
            user.set("username", username);
            user.set("password", password);
            user.set("email", email);
            user.set("fn", fn);
            user.set("ln", ln);

            user.signUp(null, {
                success: function(user) {
                  $state.go('home');
                },
                error: function(user, error) {
                    $ionicPopup.alert({
                        title: 'Sorry',
                        template: error.message,
                        okType: 'button-balanced'
                    });
                }
            });


        };

        core.userLogin = function (username,password) {


            $ionicLoading.show({template:'<ion-spinner></ion-spinner>'});
            Parse.User.logIn(username, password, {
                success: function(user) {
                    $ionicLoading.hide();
                    $state.go('home');
                },
                error: function(user, error) {
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Sorry',
                        template: error.message,
                        okType: 'button-balanced'
                    });
                }
            });

        };

        core.userReset = function (email) {

            Parse.User.requestPasswordReset(email, {
                success: function() {
                    // Password reset request was sent successfully
                    $ionicPopup.alert({
                        title: 'Success',
                        template: 'password was sent to '+email,
                        okType: 'button-balanced'
                    });
                },
                error: function(error) {
                    // Password reset failed
                    $ionicPopup.alert({
                        title: 'Sorry',
                        template: error.message,
                        okType: 'button-balanced'
                    });
                }
            });
        };


        return core;
    });