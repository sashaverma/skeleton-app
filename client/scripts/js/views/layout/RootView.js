define(function(require){ 
  var Marionette = require('marionette');
  var HeaderView = require('js/views/item/HeaderView');
  var template = require('text!js/templates/layout/root-template.html');

  var RootView = Marionette.LayoutView.extend({
    intialize:function(opts) {
      console.log('layoutview');

    },
    regions:{
      header: '#header-region',
      content: "#content"
    },      
    template: _.template(template),
    onShow: function(){
      this.header.show(new HeaderView());
    }
  });
  return RootView;
});