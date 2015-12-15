define(function(require){ 
    var Backbone= require('backbone');
    var TodoListItem = require('js/models/TodoListItem');

    var TodoList= Backbone.Collection.extend({
        model: TodoListItem
    });

    return TodoList;
});