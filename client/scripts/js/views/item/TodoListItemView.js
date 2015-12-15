define(function(require){
    var Marionette = require('marionette');
    var tpl = require('text!js/templates/item/list-item.html');


    var TodoListItemView = Marionette.ItemView.extend({
        template: _.template(tpl),
        initialize: function(option){
            console.log("initiliaze item view");
        }
    });

    return TodoListItemView;

});