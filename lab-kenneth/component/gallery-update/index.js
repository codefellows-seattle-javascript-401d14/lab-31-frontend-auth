'use strict';

const angular = require('angular');

angular.module('myApp')
.component('galleryUpdate', {
  templete: require('./gallery-update.html'),
  controllerAs: 'galleryUpdateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },  
});
