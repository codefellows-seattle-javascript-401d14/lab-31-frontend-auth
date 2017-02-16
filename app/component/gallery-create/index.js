'use strict';

require('angular').module('registerApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
