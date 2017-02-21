'use strict';

require('./_login.scss');

require('angular').module('midigramApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$location', function($log, authService, $location) {
    this.$onInit = () => {
      this.user = {username: '', password: ''};
      this.handleSubmit = () => {
        authService.login(this.user)
        .then(() => {
          this.user = {username: '', password: ''};
          $location.path('/gallery');
        })
        .catch($log.error);
      };
    };
  }],
});
