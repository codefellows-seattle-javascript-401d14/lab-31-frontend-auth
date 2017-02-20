'use strict';

require('./scss/main.scss');

//require angular to get things rolling
const angular = require('angular');


//third party router module
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');


//module creation and injection of third party apps
angular.module('registerApp', [uiRouter, ngFileUpload])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
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





//services
require('./service/auth-service.js');
require('./service/gallery-service.js');
require('./service/photo-service.js');

//components
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./container/gallery-container'); // marge
require('./component/gallery-create'); // bart
require('./component/gallery-item');   // bart
require('./component/gallery-update');
require('./container/photo-container'); 
require('./component/photo-item');
require('./component/photo-upload');
