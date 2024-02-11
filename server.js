import express from 'express';
const app = express();

//
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './public')));

app.use(express.json());

app.get('/timer', authenticateUser, function (request, response) {
  response.sendFile(path.resolve(__dirname, './public/pages', 'timer.html'));
});

// Specify the port to listen on
const port = process.env.PORT || 5000;

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
