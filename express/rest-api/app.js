// Representational State Transfer API
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_rest_api.asp

// Core Concepts
//
// Resources: Everything is a resource (user, product, order)
// Representations: Resources can have multiple representations (JSON, XML, etc.)
// Stateless: Each request contains all necessary information
// Uniform Interface: Consistent way to access and manipulate resources

// Not a Protocol
//
// Unlike SOAP or RPC, REST is an architectural style that leverages web standards

// ---------------------------------------------------------------------

// Methods
//
// GET 	    Retrieve resource(s)
// HEAD     Retrieve a resource without its body
//
// OPTIONS  Retrieve which HTTP methods are allowed
//
// POST 	  Create a new resource
// DELETE   Delete a resource
//
// PUT 	    Update a resource completely
// PATCH 	  Update a resource partially

// ---------------------------------------------------------------------

// Safety
//
// Safe operations should not modify resources (GET, HEAD, OPTIONS)

// Idempotency
//
// - Idempotent: Multiple identical requests should have the same effect as one (GET, PUT, DELETE)
// - Non-Idempotent: May have different effects with multiple calls (POST, PATCH)

// ---------------------------------------------------------------------

// Structure and Design
//
// Use nouns for resources (/users not /getUsers)
// Use plurals for collections (/users/42 not /user/42)
// Nest resources for relationships (/users/42/orders)
// Use query parameters for filtering (/products?category=electronics&min_price=100)
// Keep URLs consistent (kebab-case, camelCase etc.)
// Plan for API versioning from the start (/v1/users vs /v2/users)

// API Versioning
//
// URI Path Versioning: /api/v1/users
// Query Parameter: /api/users?version=1
// Custom Header: X-API-Version: 1
// Accept Header: Accept: application/vnd.myapi.v1+json

// ---------------------------------------------------------------------

import express, { json } from "express";

// ---------------------------------------------------------------------

const app = express();

app.use(json()); // middleware for parsing JSON

// ---------------------------------------------------------------------

let users = [
  { id: 1, name: "Alex Johnson", email: "alex@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

let count = 2;

// ---------------------------------------------------------------------

// GET - Retrieve all users
//
// e.g.: curl http://localhost:3000/api/users

app.get("/api/users", (request, response) => {
  response.json(users);
});

// GET - Retrieve a user
//
// e.g.: curl http://localhost:3000/api/users/1

app.get("/api/users/:id", (request, response) => {
  const user = users.find((user) => {
    return user.id === parseInt(request.params.id);
  });

  if (!user) return response.status(404).json({ message: "User not found" });

  response.json(user);
});

// ---------------------------------------------------------------------

// POST - Create a new user
//
// e.g.: echo '{"name": "John Doe"}' | curl -X POST --json "@-" http://localhost:3000/api/users

app.post("/api/users", (request, response) => {
  const newUser = {
    id: ++count,
    name: request.body.name,
    email: request.body.email,
  };

  users.push(newUser);

  response.status(201).json(newUser);
});

// ---------------------------------------------------------------------

// PUT - Update a user completely
//
// e.g.: echo '{"name": "John D. Roger"}' | curl -X PUT --json "@-" http://localhost:3000/api/users/3

app.put("/api/users/:id", (request, response) => {
  const user = users.find((user) => {
    return user.id === parseInt(request.params.id);
  });

  if (!user) return response.status(404).json({ message: "User not found" });

  user.name = request.body.name;
  user.email = request.body.email;

  response.json(user);
});

// ---------------------------------------------------------------------

// DELETE - Remove a user
//
// e.g.: curl -X DELETE http://localhost:3000/api/users/1

app.delete("/api/users/:id", (request, response) => {
  const userIndex = users.findIndex((user) => {
    return user.id === parseInt(request.params.id);
  });

  if (userIndex === -1)
    return response.status(404).json({ message: "User not found" });

  const deletedUser = users.splice(userIndex, 1);

  response.json(deletedUser[0]);
});

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
