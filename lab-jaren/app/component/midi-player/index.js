'use strict';

require('angular').module('midigramApp')
.component('midiPlayer', {
  template: require('./midi-player.html'),
  controllerAs: 'midiPlayerCtrl',
  bindings: {
    midi: '<',
  },
  controller: ['MidiPlayer', function(MidiPlayer) {
    this.$onInit = () => {
      this.Player = new MidiPlayer.Player(function(event) {
        console.log(event);
      });
      this.Player.loadFile(this.midi.midiURI);
      this.playMidi = () => {
        this.Player.play();
      };
      this.pauseMidi = () => {
        this.Player.pause();
      };
      this.stopMidi = () => {
        this.Player.stop();
      };
    };
  }],
});
