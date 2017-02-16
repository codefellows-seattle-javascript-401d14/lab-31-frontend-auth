'use strict';

require('angular').module('demoApp')
.component('galleryContainer', {
  template: './index.html',
  controllerAs: 'galleryCtrl',
  controller: [$log, 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      galleryService.fetchAll()
      .then(gallerys => {
        $log.log('gallery fetchAll()');
        this.gallerys = gallerys;
      }).catch($log.error);
      this.createFormGallery = {
        name: '',
        desc: '',
      };
      this.createHandleSubmit = () => {
        $log.log('createHandleSubmit loaded');
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {
            name: '',
            desc: '',
          };
        }).catch($log.error);
      };
      this.itemHandleDelete = gallery => {
        $log.log('itemHandleDelete loaded');
        galleryService.delete(gallery)
        .then(() => {
          this.gallerys = this.gallerys.filter(item => !(item._id == gallery._id));
        }).catch($log.error);
      };
      this.updateHandleSubmit = gallery => {
        galleryService.update(gallery)
        .then(gallery => {
        }).catch($log.error);
      };
    };
  }],
});
