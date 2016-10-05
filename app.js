var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.get('/', function(req, res) {
  res.append("Set-Cookie", "normal=yes");
  res.append("Set-Cookie", "httponly=yes; HttpOnly");
  res.append("Set-Cookie", "httponly_samesite=yes; HttpOnly; SameSite=strict");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/sw.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'sw.js'));
});

app.get('/test-path', function(req, res) {
  console.log("Received cookies w/o service worker:", req.cookies);
  res.send("some content");
});

app.get('/sw-test-path', function(req, res) {
  console.log("Received cookies with service worker:", req.cookies);
  res.send("some content");
});


var server = app.listen(3333, function() {
  console.log('Test server listening at http://localhost:%s',
    server.address().port);
});
