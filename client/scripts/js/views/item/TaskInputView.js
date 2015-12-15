define(function(require){ 
  var Marionette = require('marionette'); //loads underscore as well
  var tpl = require('text!js/templates/item/task-input.html');
  
  var TaskInputView = Marionette.ItemView.extend({
    template: _.template(tpl),
    className: 'form-inline',
    ui: {
        "addButton": "button.add",
        "taskInputName": "input#new-task-input-name",
        "taskInputDescription": "input#new-task-input-description",
    },
    events: {
        "click @ui.addButton": "addNewTask"
    },
    addNewTask: function(){
        var taskInputName = this.ui.taskInputName.val();
        var taskInputDescription = this.ui.taskInputDescription.val();
        if(taskInputName !== "" && taskInputDescription !== ""){
            this.triggerMethod('add:task', taskInputName, taskInputDescription);
            this.ui.taskInputName.val('');
            this.ui.taskInputDescription.val('');
        }
        else if(taskInputName === ""){
            alert("Must enter a name");
        }
        else alert("Must enter a description");
    }
  });
  return TaskInputView;


});