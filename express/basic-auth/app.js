// Basic Authentication
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_api_auth.asp

// HTTP Basic authentication uses encoded credentials in the Authorization header

// ---------------------------------------------------------------------

const express = require("express");

// ---------------------------------------------------------------------

const app = express();

// In-memory storage for API keys (use a database in production)

const users = [{ username: "user1", password: "password1" }];

// ---------------------------------------------------------------------

// Middleware for Basic authentication

const authenticateAccess = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    // WWW-Authenticate advertises the HTTP authentication methods

    response.setHeader("WWW-Authenticate", 'Basic realm="API Authentication"');

    return response.status(401).json({ message: "Authentication required" });
  }

  const decodedCredentials = Buffer.from(
    authHeader.split(" ")[1], // Authorization: Basic <base64-encoded-credentials>
    "base64",
  ).toString("utf-8");

  const [username, password] = decodedCredentials.split(":");

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (!user) {
    response.setHeader("WWW-Authenticate", 'Basic realm="API Authentication"');

    return response.status(401).json({ message: "Invalid credentials" });
  }

  request.user = { username: user.username };

  next();
};

// ---------------------------------------------------------------------

// Protected route

app.get("/api/data", authenticateAccess, (request, response) => {
  response.json({
    message: "Data accessed",
    user: request.user.username,
    data: { example: "Sensitive data" },
  });
});

// ---------------------------------------------------------------------

module.exports = app;
