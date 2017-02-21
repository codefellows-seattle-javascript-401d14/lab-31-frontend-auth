'use strict';

require('angular').module('breweryApp')
.component('login', {
  template: require('./signin.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$location', function($log, authService, $location){
    this.$onInit = () => {
      this.user = { username: '', password: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          this.user = { username: '', password: ''};
          $location.path('/gallery');
        })
        .catch($log.error);
      };
    };
  }],
});
