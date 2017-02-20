'use strict';

require('./_midi-upload.scss');

require('angular').module('midigramApp')
.component('midiUpload', {
  template: require('./midi-upload.html'),
  controllerAs: 'midiUploadCtrl',
  bindings: {
    midi: '<',
    handleSubmit: '<',
  },
});
