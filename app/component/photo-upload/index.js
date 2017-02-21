'use strict';


require('angular').module('slugramApp')
.component('photoUpload', {
  template: require('./photo-upload.html'),
  controllerAs: 'photoUploadCtrl',
  bindings: {
    photo: '<',
    handleSubmit: '<',
  },
});
