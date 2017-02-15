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

require('./component/landing/landing.js');
require('./component/signup/signup.js');
require('./component/login/login.js');
require('./component/gallery/gallery.js');
require('./component/gallery-create/gallery-create.js');
require('./component/gallery-list/gallery-list.js');
