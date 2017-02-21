'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

angular.module('myApp', [uiRouter, ngFileUpload])
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
require('./service/photoservice.js');


//components
require('./component/gallery-create');
require('./component/gallery-item');
require('./component/gallery-update');
require('./component/landing');
require('./component/photo-upload');
require('./component/photo-item');
require('./component/login');
require('./component/signup');

//containers
require('./container/gallery-container');
require('./container/photo-container');
