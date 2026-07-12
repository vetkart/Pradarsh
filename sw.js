// Uninstall service worker
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(k){
      return Promise.all(k.map(function(c){ return caches.delete(c); }));
    }).then(function(){ return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request));
});
