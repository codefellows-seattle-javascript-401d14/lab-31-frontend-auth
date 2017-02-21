'use strict';

const angular = require('angular');

angular.module('myApp')
.component('createGallery', {
  template: require('./gallerycreateindex.html'),
  controllerAs: 'createGalleryCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
