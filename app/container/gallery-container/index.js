'use strict';
// PARENT

require('./_gallery-container.scss');

require('angular').module('demoApp')
.component('galleryContainer', {
  template: require('./gallery-container.html'),
  controllerAs: 'galleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      // setup
      galleryService.fetchAll()
      .then(gallerys => {
        this.gallerys = gallerys;
        this.selected = this.gallerys[0];
      }).catch($log.error);


      // crate-gallery bindings
      this.createFormGallery = {title: '', desc: ''};
      this.createHandleSubmit = () => {
        console.log('sldkfjlkdsfjlkdjsflkjsdf');
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {title: '', desc: ''};
        }).catch($log.error);
      };

      // gallery-item bindings
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

      // gallery-update bindings
      this.updateHandleSubmit = (gallery) => {
        galleryService.update(gallery)
        .then(gallery => {
        }).catch($log.error);
      };

    };
  }],
});
