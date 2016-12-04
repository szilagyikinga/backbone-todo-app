import { Model } from 'backbone';

const Todo = Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

export default Todo;
