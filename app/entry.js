'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

angular.module('demoApp', [uiRouter]);

angular.module('demoApp')
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
  let landingRoute = {
    name: 'home',
    url: '/',
    template: '<landing />',
  };

  let galleryRoute = {
    nameL 'gallery',
    url: '/gallery',
    template: '<gallery />',
  };

  $stateProvider.state(landing);
  $stateProvider.state(galleryRoute);

}]);


require('./service/auth-service.js');

require('./component/landing');
require('./component/signup');
require('./component/login');
