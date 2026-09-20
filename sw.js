const CACHE = 'montageplaner-v45-7';
const APP_SHELL = ['./','./index.html','./manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e => {
  const r=e.request;
  if(r.mode==='navigate'||r.destination==='document'||new URL(r.url).pathname.endsWith('/index.html')){
    e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return res;}).catch(()=>caches.match('./index.html'))); return;
  }
  e.respondWith(caches.match(r).then(c=>c||fetch(r)));
});
