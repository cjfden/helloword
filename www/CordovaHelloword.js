/**
 * cordova plugin
 * Copyright (c) ljx
 *
 */
 (function(cordova){
    var CordovaAlter = function() {

    };  

    CordovaAlter.prototype.startConlose = function (success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'CordovaAlter', 'startConlose', []);
    };


    CordovaAlter.prototype.startActivity = function (params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'CordovaAlter', 'startActivity', [params]);
    };
 
    window.cordovaAlter = new CordovaAlter();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.cordovaAlter = window.cordovaAlter;
})(window.PhoneGap || window.Cordova || window.cordova);
