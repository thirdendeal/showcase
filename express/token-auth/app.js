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

import express from "express";
import bodyParser from "body-parser"; // express middleware

import { sign, verify } from "jsonwebtoken";

const { json } = bodyParser; // CommonJS module named exports workaround

// ---------------------------------------------------------------------

const app = express();

const users = [
  { id: 1, username: "user1", password: "password1", role: "user" },
];

// ---------------------------------------------------------------------

// JSON Web Tokens (JWT)
//
// Provide a stateless authentication mechanism that's compact and self-contained

const JWT_SECRET = "your-jwt-secret-key";

// Middleware for JWT authentication

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
    request.user = verify(token, JWT_SECRET); // attach user (decoded jwtPayload) to request

    next();
  } catch (error) {
    return response.status(403).json({ message: "Invalid or expired token" });
  }
};

// ---------------------------------------------------------------------

app.use(json()); // parse application/json

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

  const token = sign(jwtPayload, JWT_SECRET, { expiresIn: "1h" });

  response.json({ message: "Login successful", token });
});

// ---------------------------------------------------------------------

// Protected route

app.get("/profile", authenticateJWT, (request, response) => {
  response.json({ message: "Profile accessed", user: request.user });
});

// ---------------------------------------------------------------------

// Role-based route

app.get("/admin", authenticateJWT, (request, response) => {
  if (request.user.role !== "admin") {
    return response
      .status(403)
      .json({ message: "Access denied: admin role required" });
  }

  response.json({ message: "Admin panel accessed" });
});

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
