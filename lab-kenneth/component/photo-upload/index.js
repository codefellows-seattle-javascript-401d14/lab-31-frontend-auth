'use strict';

const angular =require('angular');

angular.module('myApp')
.component('photoUpload', {
  template: require('./photo-upload.html'),
  controllerAs: 'photoUploadCtrl',
  bindings: {
    photo: '<',
    handleSubmit: '<',
  },
});
