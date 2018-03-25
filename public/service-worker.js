importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.precaching.precacheAndRoute([])

  workbox.routing.registerRoute(
    new RegExp('^https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst(),
  )

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Días
        }),
      ],
    }),
  )

} else {
  console.log(`Boo! Workbox didn't load 😬`)
}