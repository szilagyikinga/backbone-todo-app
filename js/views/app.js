import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TodoList from 'models/Todos';
import TodoView from 'views/todo';

const AppView = View.extend({
    el: '#todoapp',
    initialize: function () {
      this.input = this.$('#new-todo');
      this.todoList = new TodoList();
      this.todoList.on('add', this.addAll, this);
      this.todoList.on('reset', this.addAll, this);
      this.todoList.fetch();
    },
    events: {
      'keypress #new-todo': 'createTodoOnEnter'
    },
    createTodoOnEnter: function(e){
      if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
        return;
      }
      this.todoList.create(this.newAttributes());
      this.input.val(''); // clean input box
    },
    addOne: function(todo){
      var view = new TodoView({model: todo});
      $('#todo-list').append(view.render().el);
    },
    addAll: function(){
      this.$('#todo-list').html(''); // clean the todo list
      this.todoList.each(this.addOne, this);
    },
    newAttributes: function(){
      return {
        title: this.input.val().trim(),
        completed: false
      }
    }
  });

export default AppView;
