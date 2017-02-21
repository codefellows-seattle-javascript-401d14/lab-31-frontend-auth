'use strict';

const angular = require('angular');

angular.module('myApp')
.service('photoService', ['$log', '$http', 'authService', 'Upload', function($log, $http, authService, Upload){

  let photoService = {};

  photoService.upload = (gallery, photo) => {
    console.log('photoService works');

    return authService.fetchToken()
    .then(token => {
      console.log(token);
      console.log('gallery++++++++++++++>,', gallery);
      console.log('photo================>', photo);
      let url = `${__API_URL__}/api/gallery${gallery._id}/pic`;
      let headers = {
        Authorization : `Bearer ${token}`,
        Accept: 'application/json',
      };
      return Upload.upload({
        url,headers,data: {
          name:photo.name,
          desc: photo.desc,
          file: photo.file,
        },
      });
    })
    .then(res=>  {
      $log.log(res.data);
    });
  };
  return photoService;
}]);
