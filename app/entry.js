'use strict';
require('./scss/base.scss');
const angular = require('angular');

angular.modules('slugramApp', []);

require('./service/auth-service.js');

require('./component/landing');
require('./component/signup');
require('./component/login');
