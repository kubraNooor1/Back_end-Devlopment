// Import express module
const express = require('express');

// Create an Express application
const app = express();

// Middleware to set a custom header
app.use((req, res, next) => {
  res.setHeader('X-MyName', 'ThisIsACustomHeader');  // Setting a custom header
  next(); // Pass control to the next middleware or route handler
});

// Example route with custom status code and message
app.get('/', (req, res) => {
  // Send a response with a custom status code and message
  res.status(200).send('Hello, this is the homepage with a custom status code and header!');
});

// Route that sends a 404 status code for "Not Found"
app.get('/notfound', (req, res) => {
  res.status(404).send('Page not found!');
});

// Route that sends a 500 status code for an internal server error
app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
