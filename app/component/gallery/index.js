'use strict';

require('angular').module('registerApp')
.component('gallery', {
  template: `
  <div>
  <h1> gallery page </h1>
  <gallery-create></gallery-create>
  <gallery-list></gallery-list>
  </div>
  `,
});
