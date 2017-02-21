'use strict';

require('angular').module('breweryApp')
.component('galleryContainer', {
  template: require('./gallery-container.html'),
  controllerAs: 'galleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      console.log('anything');
      galleryService.fetchAll()
      .then(gallerys => {
        this.gallerys = gallerys;
        this.selected = this.gallerys[0];
        $log.log('what are you', this.selected.name);
      })
      .catch($log.error);
      this.createFormGallery = {name: '', desc: ''};
      this.createHandleSubmit = () => {
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {name: '', desc: ''};
        })
        .catch($log.error);
      };
      this.itemHandleDelete = (gallery) => {
        galleryService.delete(gallery)
        .then(() => {
          this.gallerys = this.gallerys.filter(item => !(item._id == gallery._id));
        })
        .catch($log.error);
      };
      this.itemHandleSelect = (gallery) => {
        this.selected = gallery;
      };
      this.updateHandleSubmit = (gallery) => {
        galleryService.update(gallery)
        .then(gallery => {
        })
        .catch($log.error);
      };
    };
  }],
});
