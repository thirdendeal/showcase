// Routing
// ---------------------------------------------------------------------
//
// https://expressjs.com/en/guide/routing.html

import express from "express";

// ---------------------------------------------------------------------

const app = express();

// ---------------------------------------------------------------------

// app.all()
//
// You can use app.all() to handle all HTTP methods

app.all("/secret", (request, response, next) => {
  console.log("Accessing the secret section ...");

  // Multiple Callbacks
  //
  // Routing methods can have more than one callback function as arguments
  // Call the `next()` callback argument to hand off control to the next callback

  next(); // pass control to the next handler
});

app.get("/secret", (request, response) => {
  console.log("GET in secret ...");

  response.send("Got a GET request at /secret");
});

app.delete("/secret", (request, response) => {
  console.log("DELETE in secret ...");

  response.send("Got a DELETE request at /secret");
});

// ---------------------------------------------------------------------

// Endpoints
//
// A request method in combination with a route path

// Request Method
//
// Express supports methods that correspond to all HTTP request methods

// Route paths
//
// Can be strings, string patterns, or regular expressions
// Express uses the path-to-regexp package for matching route paths
// Query strings are not part of a route path

// ---------------------------------------------------------------------

// String Patterns

app.get("/a{b}", (request, response) => {
  response.send("Either `/a` or `/ab`");
});

app.get("/a{*splat}c", (request, response) => {
  response.send("Either `/ac` or `/aANYTHINGc` or `/a123456789c` etc");
});

// Regular expressions

app.get(/x/, (request, response) => {
  response.send("Anything with an `x`");
});

app.get(/.*fly$/, (request, response) => {
  response.send("Anything that ends with `fly`");
});

// ---------------------------------------------------------------------

// Route parameters
//
// Named URL segments to capture values in their position in the URL
// The captured values are Populated in the request.params object

app.get("/users/:userId/books/:bookId", (request, response) => {
  response.send(request.params);
});

// Both the hyphen (-) and the dot (.) are interpreted literally

app.get("/flights/:from-:to", (request, response) => {
  const f = request.params.from;
  const t = request.params.to;

  response.send(`You're flying from ${f} to ${t}!`);
});

app.get("/plantae/:genus.:species", (request, response) => {
  const g = request.params.genus;
  const s = request.params.species;

  response.send(`Your specimen is ${g}.${s} indeed ...`);
});

// ---------------------------------------------------------------------

// Route handlers
//
// Can be in the form of a function, an array of functions, or combinations of both

// ---------------------------------------------------------------------

// Multiple route handlers can behave like middleware to a request

app.get("/user/:id", (request, response, next) => {
  if (request.params.id === "0") {
    return next("route"); // skip to the next matching /user/:id route
  }

  response.send(`User ${request.params.id}`);
});

app.get("/user/:id", (request, response) => {
  response.send("Special handler for user ID 0");
});

// ---------------------------------------------------------------------

// Response Methods
//
// If none is called from a route handler, the client request will be left hanging

// ---------------------------------------------------------------------

// app.route()
//
// Chainable route handlers for a route path

app
  .route("/book") // single location definition reduces redundancy and typos
  .get((request, response) => {
    response.send("Get a random book");
  })
  .post((request, response) => {
    response.send("Add a book");
  })
  .put((request, response) => {
    response.send("Update the book");
  });

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
