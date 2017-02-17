'use strict';

require('angular').module('registerApp')
.component('galleryUpdate', {
  template: require('./gallery-update.html'),
  controllerAs: 'galleryUpdateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
