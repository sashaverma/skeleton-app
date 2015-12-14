var require_obj = require.config({
  baseUrl: 'scripts/',
  // define paths that require can refer back to, good for project folders
  paths : {
    //3rd party
    async : '3rd/async/lib/async',
    backbone : '3rd/backbone/backbone',
    backgrid : '3rd/backgrid/lib/backgrid',
    bootstrap : '3rd/bootstrap/dist/js/bootstrap',
    jquery : '3rd/jquery/dist/jquery',
    marionette : '3rd/marionette/lib/backbone.marionette',
    text : '3rd/requirejs-text/text',
    underscore : '3rd/underscore/underscore',
  },

  // shim defines loading dependencies for libraries
  shim : {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    bootstrap : { 
      deps :['jquery'],
      exports: 'bootstrap'
    },
    jquery: {
      exports: '$'
    },
    marionette : {
      exports : 'Marionette'
    },
    underscore: {
      exports: '_'
    }
  }
});

define(function(require){  
  var Marionette = require('marionette');
  var Backbone = require('backbone');
  var Router = require('js/Router');

  //make events available across views
  Backbone.pubSub = _.extend({}, Backbone.Events);    

  //make sure events do not stick on destroyed views
  Backbone.pubSub.subscribe = function(key, function_to_call, obj_to_bind_to) {
    Backbone.pubSub.off(key);
    Backbone.pubSub.on(key, function_to_call, obj_to_bind_to);
  };
  
  // set up the app instance
  var App = new Marionette.Application();

  App.router = new Router();      

  //once app is started start backbone history
  App.on("start", function(){
    console.log('started');
    Backbone.history.start();
  });
  App.start();
});