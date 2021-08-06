const CACHE_NAME = 'static-v3';
const DYNAMIC_CACHE = 'dynamic-v2'
const ASSETS = [
    'index.html'
]

self.addEventListener('install', event => {
    console.log('SW has been installed')
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('caching shell assets')
            cache.addAll(ASSETS)
        })
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter(key => key !== CACHE_NAME && key !== DYNAMIC_CACHE)
                .map(key => caches.delete(key))
            )
        })
    )
})

self.addEventListener('fetch', event => {
    if (!(event.request.url.indexOf('http') === 0)) return;

    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            return cacheResponse || fetch(event.request).then(fetchRes => {
                return caches.open(DYNAMIC_CACHE).then(cache => {
                    cache.put(event.request.url, fetchRes.clone());
                    return fetchRes
                })
            })
        }).catch(() => caches.match('fallback.html'))
    )
})