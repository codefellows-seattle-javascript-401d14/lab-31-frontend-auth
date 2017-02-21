'use string';

require('angular').module('demoApp')
.component('galleryCreate', {
  template: require('./gallery-create.html'),
  controllerAs: 'galleryCreateCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      this.gallery = {name: '', desc: ''};
      this.handleSubmit = () => {
        galleryService.create(this.gallery)
        .then(gallery => {
          $log.log(gallery);
          this.gallery = {name: '', desc: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
