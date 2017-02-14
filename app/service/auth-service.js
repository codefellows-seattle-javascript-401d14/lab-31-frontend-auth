'use strict';


require('angular').module('demoApp')
.service('authService', ['$q', '$log', '$http', '$window', function($q, $log, $http, $window){
  let authService = {};

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
      $log.log('succecss');
      return res.data;
    });
  };

  return authService;
}]);
