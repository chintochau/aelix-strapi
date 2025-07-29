export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'img-src': ["'self'", 'data:', 'blob:', 'https://market-assets.strapi.io', 'https://storage.aelix.ai'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://storage.aelix.ai'],
          'connect-src': ["'self'", 'https:', 'http:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
