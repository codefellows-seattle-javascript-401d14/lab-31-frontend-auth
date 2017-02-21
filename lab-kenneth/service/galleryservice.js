'use strict';

const angular = require('angular');

angular.module('myApp')
.service('galleryService', ['$log', '$http', 'authService', function($log, $http, authService) {

  let galleryService = {};
  galleryService.gallerys = [];

  galleryService.create = (gallery) => {
    console.log('POST works');
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
      // galleryService.gallerys.push(res.data);
      return res.data;
    });
  };

  galleryService.fetchAll = () => {
    let url = `${__API_URL__}/api/gallery`;
    let config = {
      headers: {
        Accept: 'application/json',
      },
    };

    return authService.fetchToken()
    //http request
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.get(url, config);
    })
    .then(res=> {
      $log.log('get to /api/gallery worked');
      galleryService.gallerys = res.data;
      return res.data;
    });
  };

  galleryService.update = (gallery) => {
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
      $log.log('update to api/gallery worked');
      return res.data;
    });
  };

  galleryService.delete = (gallery) => {
    let url = `${__API_URL__}/api/gallery/${gallery._id}`;
    let config = {
      headers: {
        Accept: 'application/json',
      },
    };
    return authService.fetchToken()
    //http request
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.delete(url,config);
    })
    .then(res=> {
      $log.log('delete api/gallery worked');
      return res.data;
    });
  };
  return galleryService;
}]);
