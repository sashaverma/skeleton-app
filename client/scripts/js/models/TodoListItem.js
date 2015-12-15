define(function(require){ 
    var Backbone = require('backbone');

    var TodoListItem= Backbone.Model.extend({
        idAttribute: "id",
        id: -1,
        description: "",
        date_created: null,
        is_done: false
        
    });

    return TodoListItem;
});