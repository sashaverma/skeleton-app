define(function(require){ 
  var Marionette = require('marionette'); //loads underscore as well
  var template = require('text!js/templates/item/content.html');
  
  var ContentView = Marionette.ItemView.extend({
    template: _.template(template),
    className: "row"
  });

  return ContentView;
});