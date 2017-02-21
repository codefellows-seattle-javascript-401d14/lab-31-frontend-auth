'use strict';

require('./_signup.scss');

require('angular').module('midigramApp')
.component('signup', {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: ['$log', 'authService', '$location', function($log, authService, $location) {
    this.$onInit = () => {
      this.user = {username: '', password: '', email: ''};
      this.handleSubmit = () => {
        authService.signup(this.user)
        .then(() => {
          this.user = {username: '', password: '', email: ''};
          $location.path('/gallery');
        })
        .catch($log.error);

      };
    };
  }],
});
