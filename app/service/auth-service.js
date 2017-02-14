'use strict';

const angular = require('angular');

angular.module('slugramApp')
.service('authService', ['$log','$http','$window', function($log,$http, $window){
  let authService ={};
  authService.signup = function(user){
    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };

    return $http.post(url,user,config)
    .then(res => {
      $log.log(url);
      $log.log(user);
      $log.log('It worked');
      return res.data;
    })
    .catch(err => $log.log(err,url));
  };

  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;
    let base64 = $window.btoa(`${user.username}:${user.password}`);
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${base64}`,
      },
    };
    return $http.get(url,config)
    .then(res => {
      return res.data;
    })
    .catch(err => $log.log(err));
  };

  return authService;
}]);
