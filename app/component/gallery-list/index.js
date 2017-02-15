'use strict';

require('angular').module('demoApp')
.component('galleryList', {
  template: require('./gallery-list.html'),
  controllerAs: 'galleryListCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.handleSubmit = () => {

        $log.log('hit gallery list controller');
        galleryService.fetchAll()
        .then(galleries => {
          this.galleries = galleries;
          $log.log('boyea!', this.galleries);
        })
        .catch($log.error);
      };
    };
  }],
});
