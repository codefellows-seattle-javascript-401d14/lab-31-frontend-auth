'use strict';

require('angular').module('slugramApp')
.component('galleryList', {
  template: require('./gallery-list.html'),
  controllerAs: 'galleryListCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      this.handleSubmit = () => {
        galleryService.fetchAll()
        .then(galleries => {
          $log.log('galleries', galleries);
          this.galleries = galleries;
        })
        .catch($log.error);
      };
    };
  }],
});
