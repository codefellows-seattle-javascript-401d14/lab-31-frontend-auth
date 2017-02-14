'use strict';

require('./scss/base.scss');

require('angular').module('midigramApp', []);

require('./service/auth-service.js');

require('./component/landing/landing.js');
require('./component/signup/signup.js');
require('./component/login/login.js');
