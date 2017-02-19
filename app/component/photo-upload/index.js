'use strict';

// require sass specific to this component
require('./_photo-upload.scss');

require('angular').module('demoApp')
.component('photoUpload', {
  template: require('./photo-upload.html'),
  controllerAs: 'photoUploadCtrl',
  bindings: {
    photo: '<',
    handleSubmit: '<',
  },
});
