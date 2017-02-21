'use strict';

const angular = require('angular');

angular.module('myApp')
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
