'use strict';

require('angular').module('midigramApp')
.component('midiItem', {
  template: require('./midi-item.html'),
  controllerAs: 'midiItemCtrl',
  bindings: {
    midi: '<',
  },
});
