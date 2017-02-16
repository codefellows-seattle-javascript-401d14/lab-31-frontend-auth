'use strict';
//child bart..yes this is a simpsons reference :P

require('angular').module('registerApp')
.component('galleryItem', {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
    handleDelete: '<',
    handleUpdate: '<',
  },
});
