const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const ordersServiceURL = 'http://localhost:4000';

// app.get('/users', (req, res) => {
//   const users = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Bob Johnson' },
//   ];
//   res.json(users);
// });

app.get('/users', async (req, res) => {
    try {
      const response = await axios.get(`${ordersServiceURL}/orders`);
      const orders = response.data;
  
      const users = [
        { id: 1, name: 'John Doe', orders: orders.slice(0, 2) },
        { id: 2, name: 'Jane Smith', orders: orders.slice(1, 3) },
        { id: 3, name: 'Bob Johnson', orders: orders.slice(0, 1) },
      ];
  
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(port, () => {
  console.log('Users service is running on port ' + port);
});