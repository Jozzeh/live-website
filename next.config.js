const withOffline = require('next-offline')
 
module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'png-calls'
        }
      },
      {
        urlPattern: /.jpeg$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jpeg-calls'
        }
      },
      {
        urlPattern: /.jpg$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jpg-calls'
        }
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 1 * 24 * 60 * 60, // 1 day
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        }
      }
    ]
  }
})