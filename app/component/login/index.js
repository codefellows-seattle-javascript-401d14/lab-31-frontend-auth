'use strict';

require('angular').module('demoApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$window', function($log, authService){
    this.$onInit = () => {
      this.user = { username: '', password: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $log.log(`token ${token}`);
          this.user = { username: '', password: ''};
        })
        .catch(() => {
          $log.error('dang');
        });
      };
    };
  }],
});
