const CACHE_NAME = 'chancellor-auto-v12';
const CORE_ASSETS = [
  './','./index.html','./vehicules.html','./pieces.html','./styles.css','./app.js','./catalogue-demo.js','./manifest.webmanifest','./app.js','./styles.css',
  './assets/chancellor-banner.png','./assets/chancellor-logo-3d.png','./assets/chancellor-logo-3d-transparent.png','./assets/chancellor-logo-original.png',
  './assets/favicon.ico','./assets/favicon-48.png','./assets/favicon-192.png','./assets/favicon-512.png','./assets/apple-touch-icon.png'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE_ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('chancellor-auto-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){event.respondWith(fetch(request).then(response=>{if(response&&response.ok)caches.open(CACHE_NAME).then(cache=>cache.put(request,response.clone()));return response;}).catch(()=>caches.match(request).then(cached=>cached||caches.match('./index.html'))));return;}
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response&&response.ok)caches.open(CACHE_NAME).then(cache=>cache.put(request,response.clone()));return response;})));
});
