'use strict';

require('./scss/base.scss');
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const ngFileUpload = require('ng-file-upload');

angular.module('midigramApp', [uiRouter, ngFileUpload])
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

require('./service/auth-service.js');
require('./service/midi-service.js');
require('./service/gallery-service.js');

require('./container/gallery-container'); // smart parent (stateful)
require('./container/midi-container');

require('./component/landing');
require('./component/signup');
require('./component/login');
require('./component/gallery-create'); // dumb child (presentation)
require('./component/gallery-item');   // dumb child
require('./component/gallery-update'); // dumb child
require('./component/midi-upload');
require('./component/midi-item');
//require('./component/midi-player');
