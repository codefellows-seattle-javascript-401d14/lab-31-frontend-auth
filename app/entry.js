'use strict';
require('./scss/main.scss');

const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

angular.module('demoApp', [uiRouter, ngFileUpload])
.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
  let routes = [
    {
      name: 'home',
      url: '/',
      template: './component/landing/index.html',
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: './component/gallery-container/index.html',
    },
  ];

  routes.forEach(route => $stateProvider.state(route));
}]);

// require services
require('./service/auth-service.js');
require('./service/photo-service.js');
require('./service/gallery-service.js');

// require containers
require('./container/gallery-container');
require('./container/photo-container');

// require components
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-create');
require('./component/gallery-item');
require('./component/gallery-update');
require('./component/photo-upload');
require('./component/photo-item');
