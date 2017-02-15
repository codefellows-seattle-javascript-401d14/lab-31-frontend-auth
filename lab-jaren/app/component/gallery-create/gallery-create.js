'use strict';

require('./_gallery-create.scss');

require('angular').module('midigramApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.gallery = {title: '', description: ''};
      this.handleSubmit = () => {
        console.log('this.gallery', this.gallery);
        galleryService.create(this.gallery)
        .then(gallery => {
          $log.log('yeeeee', gallery);
          this.gallery = {title: '', description: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
