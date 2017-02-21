'use strict';

require('angular').module('breweryApp')
.component('photoContainer', {
  template: require('./photo-container.html'),
  controllerAs: 'photoContainerCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', 'photoService', function($log, photoService) {
    this.$onInit = () => {
      this.uploadPhoto = {name: '', desc: '', file: ''};
      this.uploadHandleSubmit = () => {
        photoService.upload(this.gallery, this.uploadPhoto)
        .then(photo => {
          this.gallery.pics.push(photo);
          $log.log('Your beer is uploaded!', photo);
          this.uploadPhoto = {name: '', desc: '', file: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
