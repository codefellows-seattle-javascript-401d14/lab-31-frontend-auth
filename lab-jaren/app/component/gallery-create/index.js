'use strict';

require('./_gallery-create.scss');

require('angular').module('midigramApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  bindings: {
    gallery: '<',
    handleSubmit: '<',
  },
});
