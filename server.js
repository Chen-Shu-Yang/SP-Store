const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const serveStatic = require('serve-static');

// set hostname and portnumber
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.path);
  console.log(req.query.id);

  if (req.method !== 'GET') {
    res.type('.html');
    const msg = '<html><body>This server only serves web pages with GET!</body></html>';
    res.end(msg);
  } else {
    next();
  }
});

// go to homepage
app.get('/', (req, res) => {
  res.sendFile('/public/html/home.html', { root: __dirname });
});

app.get('/products', (req, res) => {
  res.sendFile('/public/html/products.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('/public/html/about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('/public/html/contact.html', { root: __dirname });
});

app.get('/productdetails', (req, res) => {
  res.sendFile('/public/html/product-details.html', { root: __dirname });
});

app.get('/cart', (req, res) => {
  res.sendFile('/public/html/cart.html', { root: __dirname });
});

// retrieve from public folder
app.use(serveStatic(`${__dirname}/public`));

app.listen(port, hostname, () => {
  console.log(`Server hosted at http://${hostname}:${port}`);
});
