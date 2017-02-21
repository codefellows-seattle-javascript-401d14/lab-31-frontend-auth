'use strict';

require('angular').module('breweryApp')
.component('photoItem', {
  template: require('./photo-item.html'),
  controllerAs: 'photoItemCtrl',
  bindings: {
    photo: '<',
  },
});
