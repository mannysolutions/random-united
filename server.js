const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const port = (process.env.PORT || process.env.VCAP_APP_PORT || 8080);

app.enable('trust proxy');

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [
          "'self'",
          "'unsafe-inline'",
        ],
        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-hashes'",
          "'unsafe-eval'",
          "*.cloudflare.com"
        ],
        styleSrc: ["'self'", 'fonts.googleapis.com', "'unsafe-inline'"],
        //imgSrc: ["'self'", 'https://*.com'],
        scriptSrcAttr: ["'unsafe-inline'"],
        imgSrc: ["'self'"],
        fontSrc: ["'self'", 'https://*.com', 'data:']
      },
    }
  })
);
app.use(express.static(__dirname + '/dist/random-united'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/dist/random-united/index.html'));
});

app.listen(port, function () {
  console.log("App listing on port:", port);
});
