'use strict';

require('angular').module('slugramApp')
.component('landing', {
  template: `<div>
    <h2> The home page </h2>
    <signup></signup>
    <login></login>
  </div>`,
});
