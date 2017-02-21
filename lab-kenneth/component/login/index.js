'use strict';

const angular = require('angular');

angular.module('myApp')
.component('login', {
  template: require('./login.html'),
  controllerAs: 'myloginCtrl',
  controller: ['$log', 'authService', '$window', '$location', function ($log, authService, $window, $location){
    this.$onInit = () => {
      this.user = {username: '', password: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(() => {
          $location.path('/gallery');
          this.user = {username:'', password:''};
        })
        .catch(() => {
          $window.alert('failed to sign in');
        });
      };
    };
  }],
});
