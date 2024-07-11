const express = require('express');
const app = express();
const data = require('./data');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users', (req, res) => {
  res.render('users', { users: data.users });
});

app.get('/products', (req, res) => {
  res.render('products', { products: data.products });
});

app.get('/products/greater-than-3', (req, res) => {
  const filteredProducts = data.products.filter(product => product.PID > 3);
  res.render('productsGreaterThan3', { products: filteredProducts });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
