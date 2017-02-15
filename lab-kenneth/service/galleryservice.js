'use strict';

const angular = require('angular');

angular.module('myApp')
.service('galleryService', ['$log', '$http', 'authService', function($log, $http, authService) {

  let galleryService = {};

  galleryService.create = (gallery) => {
    let url = `${__API_URL__}/api/gallery`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    return authService.fetchToken()
    //http request
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.post(url, gallery, config);
    })
    .then(res=> {
      $log.log('post to api/gallery worked');
      return res.data;
    });
  };
  return galleryService;
}]);
