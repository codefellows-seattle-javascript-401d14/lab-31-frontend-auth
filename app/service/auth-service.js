'use strict';

require('angular').module('registerApp')
.service('authService', ['$q', '$log', '$http', '$window', function($q, $log, $http, $window){
  let authService = {};

  let saveToken = (token) => {
    if(!token) return $q.reject('no token');
    try {
      $window.localStorage.token = JSON.stringify(token);
      authService.token = token;
      return $q.resolve(token);
    } catch(err) {
      return $q.reject(err);
    }
  };

  authService.fetchToken = () => {
    if (authService.token)
      return $q.resolve(authService.token);

    try {
      let token = JSON.parse($window.localStorage.token);
      return $q.resolve(token);
    } catch(err) {
      return $q.reject(err);
    }
  };

  authService.logout = () => {
    try {
      delete $window.localStorage.token;
      delete authService.token;
      return $q.resolve();
    } catch(err) {
      return $q.reject(err);
    }
  };

  authService.signup = function(user){
    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    };

    return $http.post(url, user, config)
    .then(res => {
      $log.log('success');
      return saveToken(res.data);
    });
  };

  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;

    let authtext = user.username + ':' + user.password;

    let config = {
      headers: {
        Authorization: `Basic ${$window.btoa(authtext)}`,
        Accept: 'application/json',
      },
    };

    return $http.get(url, config)
    .then(res => {
      $log.log('success');
      return saveToken(res.data);
    });
  };

  return authService;
}]);
