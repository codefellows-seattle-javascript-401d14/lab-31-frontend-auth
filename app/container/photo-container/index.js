'use strict';

require('angular').module('registerApp')
.component('photoContainer', {
  template: require('./photo-container.html'),
  controllerAs: 'photoContainerCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'photoService', function($log, photoService){
    this.$onInit = () => {
      this.uploadPhoto = {name: '', desc: '', file: ''};
      this.uploadHandleSubmit = () => {
        photoService.upload(this.gallery, this.uploadPhoto)
        .then(photo => {
          $log.log(photo, 'put some string in there so we know whats going on');
          this.gallery.pics.push(photo);
          $log.log('photo upload successful');
          this.uploadPhoto = {name: '', desc: '', file: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
