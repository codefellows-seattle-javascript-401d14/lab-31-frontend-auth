'use strict';

require('angular').module('midigramApp')
.service('midiService', ['$log', 'authService', 'Upload', function($log, authService, Upload) {
  let midiService = {};

  midiService.upload = (gallery, midi) => {
    return authService.fetchToken()
    .then(token => {
      let url = `${__API_URL__}/api/gallery/${gallery._id}/midis`;
      let headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };
      return Upload.upload({
        url,
        headers,
        data: {
          title: midi.title,
          file: midi.file,
        },
      });
    })
    .then(res => res.data);
  };
  return midiService;
}]);
