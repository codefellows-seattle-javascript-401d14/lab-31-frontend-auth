'use strict';

require('angular').module('demoApp')
.component('galleryContainer', {
  template: `<div>
    <h1> gallery page </h1>
    <gallery-create gallery="galleryCtrl.createFormGallery"
      handle-submit="galleryCtrl.createHandleSubmit"> </gallery-create>

    <ul>
      <gallery-item ng-repeat="item in galleryCtrl.gallerys track by $index"
      gallery="item" handle-delete="galleryCtrl.itemHandleDelete"
      handle-update="galleryCtrl.updateHandleSubmit">
      </gallery-item>
    </ul>
  </div>`,
  controllerAs: 'galleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService){
    this.$onInit = () => {
      galleryService.fetchAll()
      .then(gallerys => {
        this.gallerys = gallerys;
      }).catch($log.error);

      this.createFormGallery = {title: '', desc: ''};
      this.createHandleSubmit = () => {
        console.log('sldkfjlkdsfjlkdjsflkjsdf');
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {title: '', desc: ''};
        }).catch($log.error);
      };

      this.itemHandleDelete = (gallery) => {
        galleryService.delete(gallery)
        .then(() => {
          this.gallerys = this.gallerys.filter(item => !(item._id == gallery._id));
        })
        .catch($log.error);
      };

      this.updateHandleSubmit = (gallery) => {
        galleryService.update(gallery)
        .then(gallery => {
        }).catch($log.error);
      };
    };
  }],
});
