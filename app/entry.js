'use strict';
require('./scss/main.scss');
// You have to require angular first
const angular = require('angular');

// then you require in you 3rd party modules
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

// then create an angular module and ineject in your 3rd party modules
angular.module('demoApp', [uiRouter, ngFileUpload])
.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
  // setup our routes
  // landing route
  let routes = [
    {
      name: 'home',
      url: '/',
      template: './component/landing/index.html',
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
// require('./service/gallery-service.js');

// require components
require('./component/landing');
require('./component/signup');
require('./component/login');
// require('./component/gallery');
// require('./component/gallery-create');
// require('./component/gallery-list');
