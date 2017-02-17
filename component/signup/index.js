'use strict';

const angular = require('angular');

angular.module('myApp')
.component('signup', {
  template: require('./signup.html'),
  controllerAs: 'mysignupCtrl',
  controller: ['$log', 'authService', '$window', function ($log, authService, $window){
    this.$onInit = () => {
      this.user = {username: '', password: '', email: '' };

      this.handleSubmit = () => {
        authService.signup(this.user)
        .then(token => {
          $window.alert(token);
          this.user = {username: '', password: '', email: '' };

        })
        .catch(() => {
          $window.alert('nope, didnt work');
        });
      };
    };
  }],
});
