'use strict';

const angular = require('angular');

angular.module('slugramApp')
.component('login' , {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$location', function($log,authService,$location){
    this.$onInit = () => {
      this.user = {
        username: '',
        password: '',
      };
      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $location.path('/gallery');
          this.user = {
            username: '',
            password: '',
          };
        })
        .catch ($log.error);
      };
    };
  }],
});
