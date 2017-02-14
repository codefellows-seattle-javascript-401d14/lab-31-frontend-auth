'use strict';
require('./scss/base.scss');
const angular = require('angular');

angular.module('slugramApp', []);

require('./service/auth-service.js');

require('./component/landing');
require('./component/signup');
require('./component/login');
