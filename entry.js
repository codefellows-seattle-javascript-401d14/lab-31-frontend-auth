'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');


angular.module('myApp', [uiRouter])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');

  let routes = [
    {
      name:'home',
      url: '/',
      template:'<landing />',
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: '<gallery />',

    },
  ];
  routes.forEach(route => $stateProvider.state(route));
}]);

//service
require('./service/authservice-signup.js');
require('./service/galleryservice.js');
//components
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery');
require('./component/gallery-create');
require('./component/gallery-list');
