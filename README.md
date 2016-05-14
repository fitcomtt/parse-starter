## What is it?

Basic Ionic App starter that integrates with [Parse.com](http://parse.com) or [Parse-Server](https://github.com/ParsePlatform/parse-server). Contains a login and register screen.

## How to use

Download zip or clone repo

Run `npm install`

Change the ApplicationID & JavaScriptKey in `/www/js/app.js` to your own keys from Parse.com 

```js
  
  Parse.initialize("ApplicationID", "JavaScriptKey"); //uncomment if using old parse servers.
   
    //Parser server method
    //Parse.initialize("YOUR_APP_ID");
   // Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
   
```

Change the initialize & serverURL in `/www/js/app.js` to your parse server appId & url.

```js
  
  //Parse.initialize("ApplicationID", "JavaScriptKey"); //uncomment if using old parse servers.
   
    //Parser server method
    Parse.initialize("YOUR_APP_ID");
    Parse.serverURL = 'http://YOUR_PARSE_SERVER:1337/parse'
   
```



Run `npm install gulp` - if you want to use Gulp

Run `cordova plugin add cordova-plugin-whitelist` - otherwise you will get a 404 from android

Run `ionic android run` or `ionic browser run`
