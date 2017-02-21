'use strict';

require('angular').module('breweryApp')
.component('galleryUpdate', {
  template: require('./gallery-update.html'),
  controllerAs: 'galleryUpdateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
