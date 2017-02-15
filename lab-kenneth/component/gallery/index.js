'use strict';

const angular = require('angular');

angular.module('myApp')
.component('gallery', {
  template: `<div>
    <h1> This is the gallery page  </h1>
    <create-gallery>  </create-gallery>
    <gallery-list> </gallery-list> 
  </div>`,
});
