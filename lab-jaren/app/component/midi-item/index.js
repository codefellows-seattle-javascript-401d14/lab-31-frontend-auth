'use strict';

require('./_midi-item.scss');

require('angular').module('midigramApp')
.component('midiItem', {
  template: require('./midi-item.html'),
  controllerAs: 'midiItemCtrl',
  bindings: {
    midi: '<',
  },
});
