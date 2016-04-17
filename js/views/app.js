import Backbone from 'backbone';

const AppView = Backbone.View.extend({
  el: '#container',
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html("Hello World");
  }
});

export default AppView;
