'use strict';

require('angular').module('slugramApp')
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
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      $log.log('gallery service sadsadsadsadasdasdasdasd',gallery);
      return $http.post(url, gallery, config);
    })
    .then(res => {
      $log.log('post /api/gallery success');
      return res.data;
    })
    .catch(err => $log.log(err));
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
      $log.log('get /api/gallery success');
      return res.data;
    });
  };
  galleryService.update = (gallery) => {
    let url = `${__API_URL__}/api/gallery/${gallery._id}`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    return authService.fetchToken()
    .then(token => {
      config.headers.Authorization = `Bearer ${token}`;
      return $http.put(url, gallery, config);
    })
    .then(res => {
      $log.log('put /api/gallery success');
      return res.data;
    })
    .catch($log.error);
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
      $log.log('delete /api/gallery success');
      return res.data;
    });
  };
  return galleryService;
}]);
