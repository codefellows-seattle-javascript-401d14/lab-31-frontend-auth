// 'use strict';
//
// require('angular').module('slugramApp')
// .component('galleryContainer', {
//   template: `
//   <div>
//     <h1>Gallery</h1>
//     <gallery-create gallery="galleryCtrl.createFormGallery" handle-submit="galleryCtrl.createHandleSubmit"></gallery-create>
//
//     <ul>
//       <gallery-item ng-repeat="item in galleryCtrl.gallerys track by $index" gallery="item" handle-delete="galleryCtrl.itemHandleDelete" handle-update="galleryCtrl.updateHandleSubmit">
//       </gallery-item>
//     </ul>
//   </div>
//   `,
//   controllerAs: 'galleryCtrl',
//   controller: ['$log', 'galleryService', function($log,galleryService){
//     this.$onInit = () => {
//       galleryService.fetchAll()
//       .then(galleries => {
//         this.galleries = galleries;
//       })
//       .catch($log.error);
//
//       this.createFormGallery = {name: '', desc:''};
//       this.createHandleSubmit = () => {
//         galleryService.create(this.createFormGallery)
//         .then(gallery => {
//           this.galleries.push(gallery);
//           this.createFormGallery = {name: '', desc:''};
//         }).catch($log.error);
//       };
//
//       this.updateHandleSubmit = (gallery) => {
//         galleryService.update(gallery)
//         .then(gallery => $log.log(gallery))
//         .catch($log.error);
//       };
//
//       this.itemHandleDelete = (gallery) => {
//         galleryService.delete(gallery)
//         .then(() => {
//           this.galleries = this.galleries.filter(item => !(item._id == gallery._id));
//         })
//         .catch($log.error);
//       };
//     };
//   }],
// });


'use strict';
// PARENT

require('angular').module('slugramApp')
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
      // setup
      galleryService.fetchAll()
      .then(gallerys => {
        this.gallerys = gallerys;
      }).catch($log.error);


      // crate-gallery bindings
      this.createFormGallery = {name: '', desc: ''};
      this.createHandleSubmit = () => {
        console.log('sldkfjlkdsfjlkdjsflkjsdf');
        galleryService.create(this.createFormGallery)
        .then(gallery => {
          this.gallerys.push(gallery);
          this.createFormGallery = {name: '', desc: ''};
        }).catch($log.error);
      };

      // gallery-item bindings
      this.itemHandleDelete = (gallery) => {
        galleryService.delete(gallery)
        .then(() => {
          this.gallerys = this.gallerys.filter(item => !(item._id == gallery._id));
        })
        .catch($log.error);
      };

      // gallery-update bindings
      this.updateHandleSubmit = (gallery) => {
        galleryService.update(gallery)
        .then(gallery => {
          $log.log('updated gallery',gallery);
        }).catch($log.error);
      };

    };
  }],
});
