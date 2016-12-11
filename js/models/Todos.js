import { Collection } from 'backbone';
import Todo from 'models/todo';

const TodoList = Collection.extend({
  model: Todo,
  url: 'http://localhost:3000/todos',
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
