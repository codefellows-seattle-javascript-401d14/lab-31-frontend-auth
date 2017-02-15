'use strict';

require('angular').module('demoApp')
.component('signup', {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: ['$log', 'authService', '$window', function($log, authService){
    this.$onInit = () => {
      this.user = { username: '', password: '', email: '' };

      this.handleSubmit = () => {
        authService.signup(this.user)
        .then(token => {
          $log.log(`token ${token}`);
          this.user = { username: '', password: '', email: '' };
        })
        .catch(() => {
          $log.log('dang');
        });
      };
    };
  }],
});
