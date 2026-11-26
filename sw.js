const CACHE_NAME = 'chancellor-auto-v22';
const CORE_ASSETS = [
  './','./index.html','./vehicules.html','./pieces.html','./styles.css','./app.js','./catalogue-demo.js?v=21','./manifest.webmanifest','./en/index.html','./en/vehicles.html','./en/parts.html','./en/app.js','./en/catalogue-demo.js?v=21','./en/manifest.webmanifest',
  './assets/chancellor-banner.png','./assets/tucson%202020/whatsapp%20image%202026-11-10%20at%2023.48.12.webp','./assets/chancellor-logo-3d-transparent.png','./assets/chancellor-logo-original.png','./assets/Logo%20automobile%20Chancellor%20mat%20premium.png',
  './assets/favicon-48.png','./assets/favicon-192.png','./assets/favicon-512.png','./assets/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.all(CORE_ASSETS.map(async asset => {
      try { await cache.add(asset); } catch (error) {}
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith('chancellor-auto-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match(request).then(cached =>
        cached || caches.match(url.pathname.startsWith('/en/') ? '/en/index.html' : '/index.html') ||
        caches.match('./index.html')
      ))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
