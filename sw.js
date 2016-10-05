self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  console.log('activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
  console.log("fetch request to:", event.request.url);
  console.log("credentials:", event.request.credentials);
  console.log("mode:", event.request.mode);
  if (event.request.url.includes("sw-test-path")) {
    event.respondWith(fetch(event.request, {credentials: 'include'}));
  }
});
