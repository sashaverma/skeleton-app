define(function(require){ 
  var Marionette = require('marionette'); //loads underscore as well
  var header = require('text!js/templates/item/header.html');
  
  var HeaderView = Marionette.ItemView.extend({
    template: _.template(header),
    className: "row navbar"
  });

  return HeaderView;
});