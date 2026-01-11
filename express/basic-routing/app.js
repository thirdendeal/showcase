// Basic Routing
// ---------------------------------------------------------------------
//
// https://expressjs.com/en/starter/basic-routing.html

// How an application responds to a client request to a particular endpoint

import express from "express";

// ---------------------------------------------------------------------

const app = express();

app.get("/", (request, response) => {
  response.send("Got a GET request at /");
});

app.post("/", (request, response) => {
  response.send("Got a POST request at /");
});

app.put("/", (request, response) => {
  response.send("Got a PUT request at /");
});

app.delete("/", (request, response) => {
  response.send("Got a DELETE request at /");
});

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
