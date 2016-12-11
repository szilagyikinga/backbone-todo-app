import Router from 'backbone';
import TodoList from 'models/Todos';
import filterService from '../services/filter';

const TodoRouter = Backbone.Router.extend({
  routes: {
    '*filter' : 'setFilter'
  },
  setFilter: function(params) {
    filterService.filter = params || '';
    TodoList.trigger('filter');
  }
});

export default TodoRouter;
