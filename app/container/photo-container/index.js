'use strict';

require('angular').module('demoApp')
.component('photoContainer', {
  template: require('./photo-container.html'),
  controllerAs: 'photoContainerCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'photoService', function($log, photoService){
    this.$onInit = () => {
      // photo-upload state and functions
      this.uploadPhoto = {title: '', desc: '', file: ''};
      this.uploadHandleSubmit = () => {
        photoService.upload(this.gallery, this.uploadPhoto)
        .then(photo => {
          this.gallery.photos.push(photo);
          $log.log('boooyeah! upload success', photo);
          this.uploadPhoto = {title: '', desc: '', file: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
