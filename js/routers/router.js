import Router from 'backbone';
import TodoList from 'models/Todos';

const TodoRouter = Backbone.Router.extend({
  routes: {
    '*filter' : 'setFilter'
  },
  setFilter: function(params) {
    window.filter = params || '';
    TodoList.trigger('filter');
  }
});

export default TodoRouter;
