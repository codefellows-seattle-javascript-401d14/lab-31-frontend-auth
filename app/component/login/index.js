'use strict';

require('angular').module('demoApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: [ '$log', 'authService', function($log, authService){
    this.$onInit = () => {
      this.user = {username: '', password: ''};
      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          alert(`token ${token}`);
          this.user = {username: '', password: ''};
        })
        .catch($log.error);
      };
    };
  }],
});
