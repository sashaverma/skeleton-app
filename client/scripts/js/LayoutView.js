define(function(require){ 
    var Marionette = require('marionette');
    var RootView = Marionette.LayoutView.extend({
        intialize: function(options) {
            console.log('layoutview');
        },
        el: 'body',
        regions: {
            header: '#header-region',
            content: "#content"
        }
    });
    return RootView;
});