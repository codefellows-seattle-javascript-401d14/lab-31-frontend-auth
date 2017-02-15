'use strict';

require('angular').module('demoApp')
.component('gallery', {
  template: `
  <div>
    <h1> gallery page </h1>
    <gallery-create> </gallery-create>
    <gallery-list> </gallery-list>
  </div>
  `,
});
