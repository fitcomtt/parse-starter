angular.module('parse-starter', ['ionic', 'parse-starter.controllers', 'parse-starter.factories'])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('signup');
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('reset', {
        url: '/reset',
        templateUrl: 'templates/reset.html',
        controller: 'ResetCtrl'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
  })
  .run(function ($ionicPlatform, $state) {

    //Parse.com method    
   // Parse.initialize("ApplicationID", "JavaScriptKey"); //uncomment if using old parse servers.

    //Parser server method
    Parse.initialize("YOUR_APP_ID");
    Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
    //Todo
    //window.fbAsyncInit = function () {
    //  Parse.FacebookUtils.init({ // this line replaces FB.init({
    //    appId: 'FB_APP_ID', // Facebook App ID
    //    //   status: true,  // check Facebook Login status
    //    cookie: true,  // enable cookies to allow Parse to access the session
    //    xfbml: true,  // initialize Facebook social plugins on the page
    //    version: 'v2.2' // point to the latest Facebook Graph API version
    //  });
    //
    //};
    //
    //(function (d, s, id) {
    //  var js, fjs = d.getElementsByTagName(s)[0];
    //  if (d.getElementById(id)) {
    //    return;
    //  }
    //  js = d.createElement(s);
    //  js.id = id;
    //  js.src = "https://connect.facebook.net/en_US/sdk.js";
    //  fjs.parentNode.insertBefore(js, fjs);
    //}(document, 'script', 'facebook-jssdk'));

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      if (Parse.User.current()) {
        $state.go('home')

      }
    });
  });
