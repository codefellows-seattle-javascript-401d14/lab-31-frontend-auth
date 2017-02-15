'use strict';

require('angular').module('slugramApp')
.component('gallery', {
  template: `
  <div>
    <h1>gallery page</h1>
    <gallery-create></gallery-create>
    <gallery-list></gallery-list>
  </div>
  `,
});
