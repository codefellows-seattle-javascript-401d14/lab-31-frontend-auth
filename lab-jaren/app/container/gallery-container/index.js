'use strict';

require('./_gallery-container.scss');

require('angular').module('midigramApp')
.component('galleryContainer', {
  template: require('./gallery-container.html'),
  controllerAs: 'galleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      galleryService.fetchAll()
      .then(galleries => {
        this.galleries = galleries;
        this.selected = this.galleries[0];
      })
      .catch($log.error);

      this.createFormGallery = {title: '', description: ''};
      this.createHandleSubmit = () => {
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.galleries.push(gallery);
          this.createFormGallery = {title: '', description: ''};
        })
        .catch($log.error);
      };

      this.itemHandleDelete = (gallery) => {
        galleryService.delete(gallery)
        .then(() => {
          this.galleries = this.galleries.filter(item => !(item._id == gallery._id));
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
