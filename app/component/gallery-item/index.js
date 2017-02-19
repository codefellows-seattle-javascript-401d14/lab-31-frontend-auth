'use strict';

require('./_gallery-item.scss');

// CHILD COMPONENT

require('angular').module('demoApp')
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
