import AppView from 'views/app';
import $ from 'jquery';
import Workspace from 'routers/router';

import 'styles/main.css';

new Workspace();
Backbone.history.start();

$(function() {
  new AppView();
});
