'use strict';

require('./_gallery-list.scss');

require('angular').module('midigramApp')
.component('galleryList', {
  template: require('./gallery-list.html'),
  controllerAs: 'galleryListCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      this.handleSubmit = () => {
        galleryService.fetchAll()
        .then(galleries => {
          $log.log('yaaaaa', galleries);
          this.galleries = galleries;
        })
        .catch($log.error);
      };
    };
  }],
});
