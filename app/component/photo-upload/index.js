'use strict';

require('angular').module('registerApp')
.component('photoUpload', {
  template: require('./photo-upload.html'),
  controllerAs: 'photoUploadCtrl',
  bindings: {
    photo: '<',
    handleSubmit: '<',
  },
});
