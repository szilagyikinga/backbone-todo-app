import { View } from 'backbone';
import _ from 'underscore';
import todoTemplate from 'templates/todo.html';

const TodoView = View.extend({
  tagName: 'li',
  template: todoTemplate,
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    this.input = this.$('.edit');
    return this;
  },
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  events: {
    'dblclick label' : 'edit',
    'keypress .edit' : 'updateOnEnter',
    'blur .edit' : 'close'
  },
  edit: function(){
    this.$el.addClass('editing');
    this.input.focus();
  },
  close: function(){
    var value = this.input.val().trim();
    if(value) {
      this.model.save({title: value});
    }
    this.$el.removeClass('editing');
  },
  updateOnEnter: function(e){
    if(e.which == 13){
      this.close();
    }
  }
});

export default TodoView;
