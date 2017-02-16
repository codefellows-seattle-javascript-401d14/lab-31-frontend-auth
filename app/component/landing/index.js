'use strict';

require('angular').module('registerApp')
.component('landing', {
  template: `<div class="landing">
  <h1> landing page </h1>
  <signup></signup>
  <login></login>
  </div>`,
});
