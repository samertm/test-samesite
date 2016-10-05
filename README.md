# Service Worker samesite cookie bug

Reproduces a bug where same site cookies are not attached to requests
that are fetched by the service worker.

# How to reproduce:

 - Clone this repo
 - Run "npm install && node app.js"
 - Open "localhost:3333" in an incogneto tab

The following should print out in your terminal:

```
Received cookies w/o service worker: { normal: 'yes', httponly: 'yes', httponly_samesite: 'yes' }
Received cookies with service worker: { normal: 'yes', httponly: 'yes' }
```

 - Check the browser console to note that the credentials and mode for
   both requests are the same.

```
fetch request to: http://localhost:3333/test-path
credentials: include
mode: cors

fetch request to: http://localhost:3333/sw-test-path
credentials: include
mode: cors
```
