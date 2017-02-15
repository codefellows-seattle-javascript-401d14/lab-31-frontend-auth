'use strict';

const angular = require('angular');

angular.module('myApp')
.component('createGallery', {
  template: require('./gallerycreateindex.html'),
  controllerAs: 'createGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      this.gallery = {name: '' , desc: ''};

      this.handleSubmit = () => {
        galleryService.create(this.gallery)
        .then(gallery => {
          $log.log('gallery created', gallery);
          this.gallery = {name: '', desc: ''};
        })
        .catch(this.gallery = {name: '' ,  desc: ''}, $log.error);
      };
    };
  }],
});
