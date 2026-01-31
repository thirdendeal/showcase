// Token-Based Authentication (JWT)
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_api_auth.asp

// Unlike session-based authentication, doesn't require a server to store session data

// ---------------------------------------------------------------------

// Suitability: Stateless API architecture, microservices
// Complexity: Medium
// Security: High

// ---------------------------------------------------------------------

// JSON Web Tokens (JWT)
//
// Provide a stateless authentication mechanism that's compact and self-contained

// ---------------------------------------------------------------------

const express = require("express");
const bodyParser = require("body-parser"); // express middleware

const jwt = require("jsonwebtoken");

// ---------------------------------------------------------------------

const app = express();

// In-memory database (use a real database in production)

const users = [
  { id: 1, username: "admin", password: "password", role: "admin" },
  { id: 2, username: "user1", password: "password1", role: "user" },
];

// ---------------------------------------------------------------------

app.use(bodyParser.json()); // parse application/json

// ---------------------------------------------------------------------

// Middleware for JWT authentication

const JWT_SECRET = "your-jwt-secret-key";

const authenticateJWT = (request, response, next) => {
  const header = request.headers.authorization; // the Authorization header is commonly used

  if (!header) {
    return response
      .status(401)
      .json({ message: "Authorization header missing" });
  }

  const token = header.split(" ")[1]; // extract token from "Bearer <token>"

  if (!token) {
    return response.status(401).json({ message: "Token missing" });
  }

  try {
    request.user = jwt.verify(token, JWT_SECRET); // attach user (decoded jwtPayload) to request

    next();
  } catch (error) {
    return response.status(403).json({ message: "Invalid or expired token" });
  }
};

// ---------------------------------------------------------------------

// Login route - generate token

app.post("/login", (request, response) => {
  const { username, password } = request.body;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (!user) {
    return response.status(401).json({ message: "Invalid credentials" });
  }

  const jwtPayload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: "1h" });

  response.json({ message: "Login successful", token });
});

// ---------------------------------------------------------------------

// Protected route

app.get("/profile", authenticateJWT, (request, response) => {
  response.json({ message: "Profile accessed", user: request.user });
});

// ---------------------------------------------------------------------

// Protected + role-based route

app.get("/admin", authenticateJWT, (request, response) => {
  if (request.user.role !== "admin") {
    return response
      .status(403)
      .json({ message: "Access denied: admin role required" });
  }

  response.json({ message: "Admin panel accessed" });
});

// ---------------------------------------------------------------------

module.exports = app;
