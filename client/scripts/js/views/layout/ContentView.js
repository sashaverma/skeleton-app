define(function(require){ 
  var Marionette = require('marionette'); //loads underscore as well
  var template = require('text!js/templates/layout/content.html');
  
  var TodoLayoutView = Marionette.LayoutView.extend({
    template: _.template(template),
    regions: {
        createTask: '#create-task',
        todoItems: '#todo-items'
    }
  });

  return TodoLayoutView;
});