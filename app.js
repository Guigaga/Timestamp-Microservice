const express = require('express');
const app = express();

app.get('/timestamp', (req, res) => {
  const timestamp = new Date().toLocaleString();
  res.json({ timestamp });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
