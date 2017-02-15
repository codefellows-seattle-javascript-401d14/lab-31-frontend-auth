'use strict';

//require('./_gallery.scss');

require('angular').module('midigramApp')
.component('gallery', {
  template: `
  <div>
    <h1>gallery page</h1>
    <gallery-create></gallery-create>
    <gallery-list></gallery-list>
  </div>
  `,
});
