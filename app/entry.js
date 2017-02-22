'use strict';

require('./scss/main.scss');
const angular = require('angular');
const ngFileUpload = require('ng-file-upload');
const uiRouter = require('angular-ui-router');

angular.module('demoApp', [uiRouter, ngFileUpload])
.config(['$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider){
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
      template: '<gallery-container />',
    },
  ];

  routes.forEach(route => $stateProvider.state(route));
}]);
// require services
require('./service/auth-service.js');
require('./service/photo-service.js');
require('./service/gallery-service.js');

// require containers
require('./container/gallery-container'); // smart parent (stateful)
require('./container/photo-container'); // smart parent (stateful)

// require components
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-create'); // dumb child      (presintation)
require('./component/gallery-item');   // dumb child
require('./component/gallery-update'); // dumb child
require('./component/photo-upload');
require('./component/photo-item');
console.log(__API_URL__);
