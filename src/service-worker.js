self.__precacheManifest = [].concat(self.__precacheManifest || [])

workbox.setConfig({
  debug: true
})

workbox.precaching.precacheAndRoute(self.__precacheManifest, {})


// Mise en cache de routes


workbox.routing.registerRoute(
  new RegExp('https://strangerplants-948c.restdb.io/rest/(.*)'),
  new workbox.strategies.CacheFirst({
    // Options de mise en cache
    cacheName: 'articles',
    method: 'GET',
    // Uniquement les réponses en 0 ou 200 sont mises en cache
    cacheableResponse: {statuses: [0, 200]},
    plugins: [
      new workbox.expiration.Plugin({
        // Le nombre maximum d'entrées à mettre en cache
        maxEntries: 30
      })
    ]
  })
)


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