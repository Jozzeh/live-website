//This is a very standard PWA, that will check the cache first
//If nothing is found, it will retrieve and place it in the cache.

// INACTIVE AT THIS TIME

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('jdb-dyn-cache-v1').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});