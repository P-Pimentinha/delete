const express = require('express');
const app = express();

// Define a route for the GET request
app.get('/', (req, res) => {
  // Send the "Hello" string as the response
  res.send('Hello');
});

// Specify the port to listen on
const port = 5000;

// Start the server and listen on the specified port

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening in port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
