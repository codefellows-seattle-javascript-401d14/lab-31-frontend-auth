'use strict';

require('angular').module('demoApp')
.component('signup', {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: ['$log', 'authService', '$window', function($log, authService, $window){
    this.$onInit = () => {
      this.user = { username: '', password: '', email: '' };

      this.handleSubmit = () => {
        authService.signup(this.user)
        .then(token => {
          $window.alert(`token ${token}`);
          this.user = { username: '', password: '', email: '' };
        })
        .catch(() => {
          $window.alert('dang');
        });
      };
    };
  }],
});
