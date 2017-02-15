'use strict';

const angular = require('angular');

angular.module('myApp')
.component('galleryList', {
  template: require('./gallery-list.html'),
  controllerAs: 'galleryListCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
       galleryService.fetchAll()
       .then(gallerys => [
         this.gallerys = gallerys,
       ])
       .catch($log.error);
    };
  }],
});
