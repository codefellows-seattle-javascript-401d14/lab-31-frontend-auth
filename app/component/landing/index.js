'use strict';

require('angular').module('demoApp')
.component('landing', {
  template: `<div>
    <h1> landing page </h1>
    <signup></signup>
    <login></login>
  </div>`,
});
