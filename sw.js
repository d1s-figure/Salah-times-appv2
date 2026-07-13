const CACHE_NAME = 'salah-timings-v7';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install the Service Worker and cache the core files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept network requests and load from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
