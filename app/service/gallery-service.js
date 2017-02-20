'use strict';

require('angular').module('demoApp')
.service('galleryService', ['$log', '$http', 'authService', function($log, $http, authService) {
  let galleryService = {};

  galleryService.create = gallery => {
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
      $log.log('post /api/gallery success');
      return res.data;
    });
  };

  galleryService.delete = gallery => {
    let url = `${__API_URL__}/api/gallery/${gallery._id}`;
    let config = {
      headers: {
        Accept: 'application/json',
      },
    };
  };

  galleryService.update = gallery => {
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
        $log.log('post /api/gallery success');
        return res.data;
      });
  };
  return galleryService;
}]);
