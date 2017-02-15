'use strict';

const angular = require('angular');

angular.module('myApp')
.service('authService', ['$q', '$log', '$http', '$window', function($q, $log, $http, $window){
  let authService = {};
  //set token parameters

  let saveToken = (token) => {
    if(!token) return $q.reject('no token');
    try {
      $window.localStorage.token = JSON.stringify(token);
      authService.token = token;
      return $q.resolve(token);
    } catch (err) {
      return $q.reject(err);
    }
  };
  authService.fetchToken = () => {
    if(authService.token)
      return $q.resolve(authService.token);

    try{
      let token = JSON.parse($window.localStorage.token);
      return $q.resolve(token);
    }catch(err) {
      return $q.reject(err);
    }
  };

  authService.signup = function(user){
    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    return $http.post(url, user, config)
    .then(res => {
      $log.log('succsess');
      return saveToken(res.data);
    });
  };
  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;
    let authtext = user.username + ':' + user.password;

    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${$window.btoa(authtext)}`,
      },
    };
    return $http.get(url, config)
    .then(res => {
      $log.log('success');
      return res.data;
    });
  };

  return authService;
}]);
