define(function(require) {  
  var Marionette = require("marionette");
  var Backbone = require("backbone");
  var Controller = require('js/Controller');
  var MyRouter = Marionette.AppRouter.extend({
    appRoutes: {      
      "": "index"
    },

    initialize: function(App){
      this.controller = Controller;
    }
  });

  return MyRouter;

});