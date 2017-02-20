'use strict';

require('angular').module('breweryApp')
.component('gallery', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
