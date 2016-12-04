import { View } from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import TodoList from 'models/Todos';
import TodoView from 'views/todo';

const AppView = View.extend({
    el: '#todoapp',
    initialize: function () {
      this.input = this.$('#new-todo');
      this.listenTo(TodoList, 'add', this.addAll);
      this.listenTo(TodoList, 'filter', this.addAll);
      TodoList.fetch();
    },
    events: {
      'keypress #new-todo': 'createTodoOnEnter'
    },
    createTodoOnEnter: function(e){
      if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
        return;
      }
      TodoList.create(this.newAttributes());
      this.input.val('');
    },
    addOne: function(todo){
      var view = new TodoView({model: todo});
      $('#todo-list').append(view.render().el);
    },
    addAll: function(){
      this.$('#todo-list').html('');
      switch(window.filter){
        case 'pending':
          _.each(TodoList.remaining(), this.addOne);
          break;
        case 'completed':
          _.each(TodoList.completed(), this.addOne);
          break;
        default:
          TodoList.each(this.addOne, this);
          break;
      }
    },
    newAttributes: function(){
      return {
        title: this.input.val().trim(),
        completed: false
      }
    }
  });

export default AppView;
