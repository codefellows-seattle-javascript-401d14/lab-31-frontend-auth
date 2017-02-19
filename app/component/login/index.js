'use strict';

require('angular').module('demoApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: [ '$log', 'authService', '$location', function($log, authService, $location){
    this.$onInit = () => {
      this.user = {username: '', password: ''};
      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          this.user = {username: '', password: ''};
          $location.path('/gallery');
        })
        .catch($log.error);
      };
    };
  }],
});
