'use strict';

require('angular').module('slugramApp')
.component('photoItem', {
  template: require('./photo-item.html'),
  controllerAs: 'photoItemCtrl',
  bindings: {
    photo: '<',
  },
});
