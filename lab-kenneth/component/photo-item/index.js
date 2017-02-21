'use strict';

const angular = require('angular');

angular.module('myApp')
.component('photoItem', {
  template: require('./photo-item.html'),
  controllerAs:'photoItemCtrl',
  bindings: {
    photo: '<',
  },
});
