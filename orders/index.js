const express = require('express');
const app = express();
const port = 4000;

app.get('/orders', (req, res) => {
  const orders = [
    { id: 1, product: 'Product A' },
    { id: 2, product: 'Product B' },
    { id: 3, product: 'Product C' },
  ];
  res.json(orders);
});

app.listen(port, () => {
  console.log('Orders service is running on port ' + port);
});