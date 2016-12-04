import { View } from 'backbone';
import _ from 'underscore';
import todoTemplate from 'templates/todo.html';

const TodoView = View.extend({
  tagName: 'li',
  template: todoTemplate,
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

export default TodoView;
