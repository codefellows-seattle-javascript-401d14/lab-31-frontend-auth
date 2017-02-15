

'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

angular.module('slugramApp', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  let routes = [
    {
      name:'home',
      url:'/',
      template:'<landing />',
    },
    {
      name:'gallery',
      url:'/gallery',
      template:'<gallery-container />',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

require('./service/auth-service.js');
require('./service/gallery-service.js');

require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-container');
require('./component/gallery-create');
require('./component/gallery-item');
require('./component/gallery-update');
