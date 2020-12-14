const CACHE_VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request;
  //get
  if(request.method !== 'GET') {
    return
  }

  //buscar en cache
  event.respondWith(cacheResponse(request));

  //actualizat el cache
  event.waitUntil(updateCache(request));

})

async function precache() {
  const cache = await caches.open(CACHE_VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/video.mp4',
  ])
}

async function cacheResponse(request) {
  const cache = await caches.open(CACHE_VERSION);
  const response = await cache.match(request);
  return response ?? fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(CACHE_VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}