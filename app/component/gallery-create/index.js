'use strict';


require('angular').module('slugramApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.gallery = {title: '', description: ''};
      this.handleSubmit = () => {
        galleryService.create(this.gallery)
        .then(gallery => {
          $log.log('gallery', gallery);
          this.gallery = {title: '', description: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
