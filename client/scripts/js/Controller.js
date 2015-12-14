define(function(require) {
    var App;
    var Controller = {
        initialize: function(options){
            App = options.app;
        },
        index: function(){
            console.log('app');
            //App.content.show();
        }
    };

});