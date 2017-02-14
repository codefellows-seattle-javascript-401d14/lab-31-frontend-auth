'use strict';

require('./scss/base.scss');
const angular = require('angular');

angular.module('myApp', []);

//service
require('./service/authservice-signup.js');


//components
require('./component/signup');
