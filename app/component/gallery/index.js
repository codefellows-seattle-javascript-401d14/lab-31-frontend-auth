'use strict';

require('angular').module('demoApp')
.component('gallery', {
  template: `
  <div>
    <h1>gallery</h1>
    <gallery-create></gallery-create>
    <gallery-list></gallery-list>
  </div>
  `,
});
