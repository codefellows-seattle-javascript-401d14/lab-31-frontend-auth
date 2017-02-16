'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

angular.module('midigramApp', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  let routes = [
    {
      name: 'home',
      url: '/',
      template: '<landing />',
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: '<gallery />',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/auth-service.js');
require('./service/gallery-service.js');

require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-container'); // smart parent (stateful)
require('./component/gallery-create'); // dumb child (presentation)
require('./component/gallery-item');   // dumb child
require('./component/gallery-update'); // dumb child
