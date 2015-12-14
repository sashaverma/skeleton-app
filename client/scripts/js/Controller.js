define(function(require) {
  'use strict';
  var RootView = require('js/views/layout/RootView');
  var App;

  var Controller = Marionette.Object.extend({
    initialize: function(options){
      console.log("init");
      App = options.app;
    },
    index: function(){
      console.log();
      App.rootView.getRegion('base').show(new RootView());
    }
  });

  return Controller;
});