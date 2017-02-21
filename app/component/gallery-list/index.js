'use stict';

require('angular').module('demoApp')
.component('galleryList', {
  template: require('./gallery-list.html'),
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.galleryService.fetchAll()
    .then(gallerys => {
      this.gallerys = gallerys;
    })
  .catch($log.error);
    };
  }],
});
