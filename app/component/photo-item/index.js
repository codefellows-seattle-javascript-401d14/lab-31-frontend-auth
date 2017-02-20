'use strict';

require('angular').module('registerApp')
.component('photoItem', {
  template: require('./photo-item.html'),
  controllerAs: 'photoItemCtrl',
  bindings: {
    photo: '<',
  },
});
