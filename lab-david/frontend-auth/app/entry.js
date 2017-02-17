'use strict';

const angular = require('angular');
const uiRouter = require('angualr-ui-Router');

require('angular').module('breweryApp', []);

require('./service/auth-service.js');

require('./component/landing');
require('./component/signup');
