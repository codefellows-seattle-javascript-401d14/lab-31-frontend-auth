'use strict';

require('angular').module('demoApp')
.component('galleryUpdate', {
  template: require('./gallery-update.html'),
  controllerAs: 'galleryUpdateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
