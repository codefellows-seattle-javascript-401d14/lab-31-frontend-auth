'use strict';

const angular = require('angular');
const uiRouter = require('angular-ui-router');

require('angular').module('breweryApp', []);

require('./service/auth-service.js');

require('./component/landing');
require('./component/signup');
