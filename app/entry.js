'use strict';

require('angular').module('demoApp', []);

require('./service/auth-service.js');
require('./component/landing');
require('./component/signup');
require('./component/login');
require('./scss/base.scss');
console.log(__API_URL__);
