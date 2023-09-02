const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log('Users service is running on port ' + port);
});