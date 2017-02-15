'use strict';

require('angular').module('demoApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.gallery = {title: '', desc: ''};

      this.handleSubmit = () => {
        galleryService.create(this.gallery)
        .then(gallery => {
          $log.log('boyea!', gallery);
          this.gallery = {title: '', desc: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
