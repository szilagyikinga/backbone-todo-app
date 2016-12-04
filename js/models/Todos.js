import { Collection } from 'backbone';
import Store from 'backbone.localstorage';
import Todo from 'models/todo';

const TodoList = Collection.extend({
  model: Todo,
  localStorage: new Store("todos"),
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },
  remaining: function() {
    return this.without.apply( this, this.completed() );
  }
});

export default new TodoList();
