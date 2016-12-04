import { Collection } from 'backbone';
import Store from 'backbone.localstorage';
import Todo from 'models/todo';

const TodoList = Collection.extend({
  model: Todo,
  localStorage: new Store("todos")
});

export default TodoList;
