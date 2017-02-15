'use strict';

require('./_login.scss');

require('angular').module('midigramApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$http', '$window', function($log, authService, $http, $window) {
    this.$onInit = () => {
      this.user = {username: '', password: '', email: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $window.alert(`token ${token}`);
          this.user = {username: '', password: ''};
        })
        .catch(() => {
          $window.alert('dang');
        });

      };
    };
  }],
});
