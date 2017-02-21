'use strict';

const angular = require('angular');

angular.module('myApp')
.component('photoContainer', {
  template: require('./photo-container.html'),
  controllerAs:'photoContainerCtrl',
  bindings : {
    gallery: '<',
  },
  controller: ['$log', 'photoService', function($log, photoService){
    this.$onInit = () => {
      this.uploadPhoto = {name: '', desc: '', file: ''};
      this.uploadHandleSubmit = () => {
        photoService.upload(this.gallery, this.uploadPhoto)
        .then(photo => {
          this.gallery.pics.push(photo);
          this.uploadPhoto = {name: '', desc: '', file: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
