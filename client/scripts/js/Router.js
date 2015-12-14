define(function(require) {  
    var Marionette = require("marionette");
    var Backbone = require("backbone");
    var Controller = require('js/Controller');
    var MyRouter = Marionette.AppRouter.extend({
        appRoutes: {      
            "": "index"
        },
        initialize: function(options){
            console.log('router created');
            this.controller = new Controller({app: options.app});
        }
    });

    return MyRouter;

});