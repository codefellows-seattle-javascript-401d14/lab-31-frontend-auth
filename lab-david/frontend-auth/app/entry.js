'use strict';

// require('./scss/main/scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

angular.module('breweryApp', [uiRouter, ngFileUpload])
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
      template: '<gallery-container />',
    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

// require('angular').module('breweryApp', []);

require('./service/auth-service.js');
require('./service/photo-service.js');
require('./service/gallery-service.js');

require('./container/gallery-container');
require('./container/photo-container');

require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-create');
require('./component/gallery-item');
require('./component/gallery-update');
require('./component/photo-upload');
require('./component/photo-item');
