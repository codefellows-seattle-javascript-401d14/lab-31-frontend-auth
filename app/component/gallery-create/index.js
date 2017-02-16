'use strict';

require('angular').module('demoApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
