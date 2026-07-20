const CACHE = 'wemirror-v1';
const ASSETS = [
  '/wemirror/',
  '/wemirror/index.html',
  '/wemirror/manifest.json',
  '/wemirror/icon-192x192.png',
  '/wemirror/icon-512x512.png',
];

// Instala e armazena os assets em cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Responde com cache quando offline, rede quando online
self.addEventListener('fetch', e => {
  // Não cachear chamadas de API (voz ElevenLabs)
  if (e.request.url.includes('workers.dev') || e.request.url.includes('elevenlabs')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
