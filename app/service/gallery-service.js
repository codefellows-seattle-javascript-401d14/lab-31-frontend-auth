'use strict';

require('angular').module('registerApp')
.service('galleryService', ['$log', '$http', 'authService', function($log, $http, authService){
  let galleryService = {};
  galleryService.galleries = [];

  galleryService.create = (gallery) => {
    let url = `${__API_URL__}/api/gallery`;
    let config = {
      headers: {
        'Content-type': 'application/json',
        Accept:'appication/json',
      },
    };
    return authService.fetchToken()
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.post(url, gallery, config);
    })
    .then(res => {
      $log.log('post /api/gallery success');
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
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.get(url, config);
    })
    .then(res => {
      $log.log('GET /api/gallery success');

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
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.delete(url, config);
    })
    .then(res => {
      $log.log('DELETE /api/gallery/:id success');
      return res.data;
    });
  };
  galleryService.update = (gallery) => {
    let url = `${__API_URL__}/api/gallery/${gallery._id}`;
    let config = {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    };
    return authService.fetchToken()
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.put(url, gallery, config);
    })
    .then(res => {
      $log.log('put /api/gallery success!!!!');
      return res.data;
    });
  };
  return galleryService;
}]);