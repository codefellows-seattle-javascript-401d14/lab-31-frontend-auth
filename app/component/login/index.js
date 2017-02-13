'use strict';

const angular = require('angular');

angular.module('slugramApp')
.component('login' , {
  template: require('./login.html'),
  controllerAs: 'loginCtrl',
  controller: ['$log', 'authService', '$window', function($log,authService,$window){
    this.$onInit = () => {
      this.user = {
        username: '',
        password: '',
      };
      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $window.alert(`token ${token}`);
          this.user = {
            username: '',
            password: '',
          };
        })
        .catch (() => $window.alert('whooops'));
      };
    };
  }],
});
