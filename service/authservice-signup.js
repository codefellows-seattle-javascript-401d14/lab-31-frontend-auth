'use strict';

const angular = require('angular');

angular.module('myApp')
.service('authService', ['$q', '$log', '$http', '$window', function ($q, $log, $http, $window){
  let authService = {};
  authService.signup = function(user){
    let url = `{__API_URL__}/api/signup`;
    // let base64 = $window.btoa(`${user.username}: ${user.password}`);
    let config = {
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json',
        // Authorization: `Basic ${base64}`,

      },
    };
    return $http.post(url, user, config)
    .then(res => {
      $log.log('succsess');
      return res.data;
    });
  };
  return authService;
}]);
