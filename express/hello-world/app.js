// Hello, World!
// ---------------------------------------------------------------------
//
// https://expressjs.com/en/starter/hello-world.html

// Express
//
// Node.js web application framework

import express from "express";

// ---------------------------------------------------------------------

const app = express();

// For every other path, it will respond with a 404 Not Found

app.get("/", (request, response) => {
  response.send("Hello World!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
