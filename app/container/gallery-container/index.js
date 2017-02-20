'use strict';
//marge not homer

require('angular').module('registerApp')
.component('galleryContainer', {
  template: require('./gallery-container.html'),
  controllerAs: 'galleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){

    this.$onInit = () => {
      galleryService.fetchAll()
      .then(gallerys => {
        this.gallerys = gallerys;
        this.selected = gallerys[0];
      }).catch($log.error);

      this.createFormGallery = {name: '', desc: ''};
      this.createHandleSubmit = () => {
        console.log('Whole lotta nope');
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {name: '', desc: ''};
        }).catch($log.error);
      };


      this.itemHandleDelete = (gallery) => {
        $log.log(gallery, 'hahaha');
        galleryService.delete(gallery)
        .then(() => {
          this.gallerys = this.gallerys.filter(item => !(item._id == gallery._id));
        }).catch($log.error);
      };

      this.itemHandleSelect = (gallery) => {
        this.selected = gallery;
      };

      
      this.updateHandleSubmit = (gallery) => {
        galleryService.update(gallery)
        .then(gallery => {
        }).catch($log.error);
      };
    };
  }],
});