self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
  debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// Mise en cache de routes
// Articles
workbox.routing.registerRoute(
  new RegExp('https://strangerplants-948c.restdb.io/rest/(.*)'),
  new workbox.strategies.CacheFirst({
    // Options de mise en cache
    cacheName: 'articles',
    method: 'GET',
    // Uniquement les réponses en 0 ou 200 sont mises en cache
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        // Le nombre maximum d'entrées à mettre en cache
        maxEntries: 30
      })
    ]
  })
)
// Gfonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapies|gstatic).com/(.*)'),
  new workbox.strategies.CacheFirst({
    cacheName: 'googleapis',
    method: 'GET',
    cacheableResponse: { statuses: [0, 200] },
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
)

// Notifications
let clickUrl

self.addEventListener('push', event => {
  // { "title": "test", "url": "strangerplants.netlify.app" }
  let pushMessage = event.data.json()
  clickUrl = pushMessage.url

  const options = {
    body: pushMessage.title,
    icon: './img/apple-touch-icon-60x60.png',
    image: './img/apple-touch-icon-60x60.png',
    vibrate: [200, 100, 200, 100],
    tag: 'vibration-sample'
  }

  event.waitUntil(self.registration.showNotification(pushMessage.title, options))
})

self.addEventListener('notificationclick', event => {
  event.notification.close()

  const promiseChain = clients.openWindow(clickUrl)
  event.waitUntil(promiseChain)
})
