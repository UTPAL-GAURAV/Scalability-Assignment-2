const express = require('express');
const app = express();

// Define the route for adding two numbers
app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const sum = num1 + num2;
  res.json({ result: sum });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
