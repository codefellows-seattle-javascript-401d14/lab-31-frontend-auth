'use strict';
require('./scss/main.scss');
// create an angular module
require('angular').module('demoApp', []);

// require services
require('./service/auth-service.js');

// require components
require('./component/landing/index.js');
require('./component/signup/index.js');
require('./component/login/index.js');
