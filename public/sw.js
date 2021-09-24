const self = this;
const CACHE_VERSION = "v1.1";
const urls = ["/", "/sw.js"];
const CURRENT_CACHE = {
  static: "static-cache" + CACHE_VERSION,
  dynamic: "dynamic=cache" + CACHE_VERSION,
};
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CURRENT_CACHE["static"]).then((cache) => {
      console.log("install");
      cache.addAll(urls);
    })
  );
});

self.addEventListener("activate", (event) => {
  let expectedName = Object.values(CURRENT_CACHE);
  event.waitUntil(
    caches.keys().then((cachesNames) => {
      return Promise.all(
        cachesNames.forEach((cacheName) => {
          if (!expectedName.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      else {
        return fetch(event.request).then((netResponse) => {
          return caches.open(CURRENT_CACHE["dynamic"]).then((cache) => {
            cache.put(event.request, netResponse.clone());
            return netResponse;
          });
        });
      }
    })
  );
});
