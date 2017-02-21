'use strict';

require('angular').module('midigramApp')
.component('midiContainer', {
  template: require('./midi-container.html'),
  controllerAs: 'midiContainerCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'midiService', function($log, midiService) {
    this.$onInit = () => {
      this.uploadMidi = {title: '', file: ''};
      this.uploadHandleSubmit = () => {
        midiService.upload(this.gallery, this.uploadMidi)
        .then(midi => {
          this.gallery.midis.push(midi);
          $log.log('upload success', midi);
          this.uploadMidi = {title: '', file: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
