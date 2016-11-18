var i18next = require('i18next');
var XHR = require('i18next-xhr-backend');

i18next
  .use(XHR)
  .init({
    lng: 'en',
    debug: false,
    backend: {
      loadPath: '{{ns}}##{{lng}}',
    },
  });

console.log('Loaded!');
