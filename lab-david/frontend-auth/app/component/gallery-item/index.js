'use strict';

require('angular').module('breweryApp')
.component('galleryItem', {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
    handleDelete: '<',
    handleUpdate: '<',
    handleSelect: '<',
  },
});
