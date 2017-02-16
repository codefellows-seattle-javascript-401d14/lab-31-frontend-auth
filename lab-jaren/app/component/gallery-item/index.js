'use strict';

require('./_gallery-item.scss');

require('angular').module('midigramApp')
.component('galleryItem', {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
    handleDelete: '<',
    handleUpdate: '<',
  },
});
