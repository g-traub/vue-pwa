self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
  debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// Mise en cache de routes
// Articles
workbox.routing.registerRoute(
  new RegExp('https://strangerplants-948c.restdb.io/(.*)'),
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

// Mettre en cache les polices
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

self.addEventListener('fetch', event => {
  // Réponse aux requêtes vers l'API
  if (event.request.url.includes('/rest/')) {
    console.log('helazraelo')
    event.respondWith(caches.match(event.request)) // Si on a déjà du data en cache, on répond avec
    event.waitUntil(update(event.request).then(refresh))
  } else {
    console.log('hello')
  }
})

function cache(request, response) {
  if (response.type === 'error' || response.type === 'opaque') {
    return Promise.resolve() // do not put in cache network errors
  }

  return caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()))
}

function update(request) {
  return fetch(request.url).then(response =>
    cache(request, response) // On peut mettre la réponse en cache
      .then(() => response)
  )
}

// Fonction si l'utilisateur se trouve de nouveau en ligne, pour récupérer les nouveaux articles potentiels
function refresh(response) {
  return response.json().then(jsonResponse => {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        // On envoie les nouvelles data au client
        client.postMessage(
          JSON.stringify({
            type: response.url,
            data: jsonResponse.data
          })
        )
      })
    })
    return jsonResponse.data
  })
}

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
