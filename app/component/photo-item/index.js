'use strict';

require('angular').module('demoApp')
.component('photoItem', {
  template: require('./photo-item.html'),
  controllerAs: 'photoItemCtrl',
  bindings: {
    photo: '<',
  },
});
