'use strict';

const angular = require('angular');

angular.module('slugramApp')
.service('authService', ['$log','$http', function($log,$http){
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
      $log.log('It worked');
      return res.data;
    })
    .catch(err => $log.log(err));
  };

  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    return $http.get(url,user,config)
    .then(res => {
      return res.data;
    })
    .catch(err => $log.log(err));
  };

  return authService;
}]);
