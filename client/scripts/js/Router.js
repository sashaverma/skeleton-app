define(function(require) {  
  var Marionette = require("marionette");
  var Backbone = require("backbone");
  var Controller = require('js/Controller');
  var Router = Marionette.AppRouter.extend({                
    appRoutes: {      
      "": "index",
    },

    initialize: function(app){
      this.controller = new Controller({ app: app } );
    }
  });
  return Router;
});