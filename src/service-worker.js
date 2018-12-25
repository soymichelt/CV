/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
console.log("Pre-catching")
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// App Shell
console.log("Catching index.html")
workbox.routing.registerNavigationRoute(
    '/index.html'
)

// Precargar datos de cache y cuando se obtengan de la web se actualizan
console.log("Catching firestore")
workbox.routing.registerRoute(
    /^https?:\/\/firestore.googleapis.com\/(.*)/,
    workbox.strategies.staleWhileRevalidate(),
    'GET'
)

// Last fuentes van con Cache First y vencen al mes
console.log("Catching fonts")
workbox.routing.registerRoute(
    /^https?:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, 
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 30 * 24 * 60 * 60
            })
        ]
    }),
    'GET'
)

// Estrategia por defecto. Todas usan Network First
console.log("Catch by default")
workbox.routing.registerRoute(
    /^https?.*/,
    workbox.strategies.networkFirst(),
    'GET'
)