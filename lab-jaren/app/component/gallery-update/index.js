'use strict';

require('./_gallery-update.scss');

require('angular').module('midigramApp')
.component('galleryUpdate', {
  template: require('./gallery-update.html'),
  controllerAs: 'galleryUpdateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
