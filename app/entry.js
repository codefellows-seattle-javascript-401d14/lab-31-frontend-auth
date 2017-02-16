'use strict';


//require angular to get things rolling
const angular = require('angular');


//third party router module
const uiRouter = require('angular-ui-router');



//module creation and injection of third party apps
angular.module('registerApp', [uiRouter])
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


//components
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-container'); // marge
require('./component/gallery-create'); // bart
require('./component/gallery-item');   // bart
require('./component/gallery-update'); // bart
