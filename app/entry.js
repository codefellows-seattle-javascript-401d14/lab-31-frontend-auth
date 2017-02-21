'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

angular.module('demoApp', [uiRouter]);

angular.module('demoApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
  let routes = [{
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
require('./component/gallery');
require('./component/gallery-create');
require('./component/gallery-list');
