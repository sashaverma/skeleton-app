define(function(require) {
  'use strict';
  //views
  var RootView = require('js/views/layout/RootView');
  var TodoListView = require('js/views/collection/TodoListView');
  var ContentView = require('js/views/layout/ContentView');
  var TaskInputView = require('js/views/item/TaskInputView');

  //collections & models
  var TodoList = require('js/collections/TodoList');
  var TodoListItem = require('js/models/TodoListItem');
  var App;

  var Controller = Marionette.Object.extend({
    initialize: function(options){
      console.log("init");
      App = options.app;
    },
    index: function(){      
      var rootView = new RootView();
      var contentView = new ContentView();
      App.rootView.getRegion('base').show(rootView);

      rootView.getRegion('content').show(contentView);

      var dummy_data = [
        {
          id: 0,
          name: "Task 1",
          description: "Finish todo app",
          date_created: new Date(),
          is_done: false
        },
        {
          id: 1,
          name: "Task 2",
          description: "work out",
          date_created: new Date(),
          is_done:false
        }
      ];

      var todoCollection = new TodoList(dummy_data);
      var taskInputView = new TaskInputView();
      contentView.getRegion('todoItems').show(new TodoListView({collection: todoCollection }));
      contentView.getRegion('createTask').show(taskInputView);
      taskInputView.on('add:task', this.createNewTask);

    },
    createNewTask: function(name, description){
      var model = new TodoListItem({
        name: name,
        description: description,
        date_created: new Date(),
        is_done: false
      });
      var contentView = App.rootView.getRegion('base').currentView.getRegion('content').currentView;
      //console.log()
      contentView.getRegion('todoItems').currentView.collection.add(model);
    }

  });

  return Controller;
});