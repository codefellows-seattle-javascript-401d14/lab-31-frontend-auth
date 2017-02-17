'use strict';

require('angular').module('breweryApp')
.component('login', {
  template: require('./signin.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$window', function($log, authService, $window){
    this.$onInit = () => {
      this.user = { username: '', password: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $window.alert(`token ${token}`);
          this.user = { username: '', password: ''};
        })
        .catch(() => {
          $window.alert('Not Any Good');
        });
      };
    };
  }],
});
