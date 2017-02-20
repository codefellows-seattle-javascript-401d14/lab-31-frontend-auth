'use strict';

require('angular').module('demoApp')
.service('authService', ['$q', '$log', '$http', '$window', function($q, $log, $http, $window){
  let authService = {};
  authService.signup = function(user){
    let url = `${__API_URL__}/api/signup`;
    let config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'applicaton/json',
      },
    };
    return $http.post(url, user, config)
    .then(res => {
      $log.log('success');
      return res.data;
    });
  };

  authService.login = function(user){
    let url = `${__API_URL__}/api/login`;
    let authtext = user.username + ':' + user.password;
    let config = {
      headers: {
        Authorization: 'Basic ${$window.btoa(authtext)}',
        Accept: 'applicaton/json',
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
