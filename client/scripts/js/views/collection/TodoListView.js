define(function(require){ 
  var Marionette = require('marionette');
  var TodoListItemView = require('js/views/item/TodoListItemView');

  var TodoListView = Marionette.CollectionView.extend({
    
    intialize:function(opts) {
      console.log('todo collection view');
    },

    childView: TodoListItemView,
    tagName: 'ul',
    className: 'list-group'

  });
  return TodoListView;
});