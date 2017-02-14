'use strict';

const angular = require('angular');

angular.module('myApp')
.component('login', {
  template: require('../signup/signup.html'),
  controllerAs: 'myloginCtrl',
  controller: ['$log', 'authService', '$window', function ($log, authService, $window){
    this.$onInit = () => {
      this.user = {username: '', password: ''};

      this.handleSubmit = () => {
        authService.login(this.user)
        .then(token => {
          $window.alert('your token====>', token);
          this.user = {username:'', password:''};
        })
        .catch(() => {
          $window.alert('failed to sign in');
        });
      };
    };
  }],
});
