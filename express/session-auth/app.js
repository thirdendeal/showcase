// Session-Based Authentication
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_api_auth.asp

// Uses cookies to maintain user state

// ---------------------------------------------------------------------

// Suitability: Traditional web apps
// Complexity: Low
// Security: Medium

// ---------------------------------------------------------------------

import express from "express";

import session from "express-session"; // development-only express middleware
import bodyParser from "body-parser"; // express middleware

const { json, urlencoded } = bodyParser; // CommonJS module named exports workaround

// ---------------------------------------------------------------------

const app = express();

const users = [{ id: 1, username: "user1", password: "password1" }];

// ---------------------------------------------------------------------

app.use(json()); // parse application/json
app.use(urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// ---------------------------------------------------------------------

// Default Server-Side Session Storage (MemoryStore)
//
// Purposely not designed for a production environment
// For a list of compatible session stores, see: https://expressjs.com/en/resources/middleware/session.html#compatible-session-stores

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }),
);

// ---------------------------------------------------------------------

// Login
//
// e.g.: echo '{"username": "user1", "password": "password1"}' |  curl -X POST --cookie-jar cookies.txt --json "@-" http://localhost:3000/login

app.post("/login", (request, response) => {
  const { username, password } = request.body;

  const user = users.find((user) => {
    return user.username === username && user.password === password;
  });

  if (!user)
    return response.status(401).json({ message: "Invalid credentials" });

  // Store user information in session (excluding password)

  request.session.user = {
    id: user.id,
    username: user.username,
  };

  response.json({ message: "Login successful", user: request.session.user });
});

// Logout
//
// e.g.: curl -X POST --cookie cookies.txt http://localhost:3000/logout

app.post("/logout", (request, response) => {
  request.session.destroy((err) => {
    if (err) return response.status(500).json({ message: "Logout failed" });

    response.json({ message: "Logout successful" });
  });
});

// ---------------------------------------------------------------------

// Protected route
//
// e.g.: curl --cookie cookies.txt http://localhost:3000/profile

app.get("/profile", (request, response) => {
  if (!request.session.user)
    return response.status(401).json({ message: "Unauthorized" });

  response.json({ message: "Profile accessed", user: request.session.user });
});

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log("Using development only MemoryStore session storage!");

  console.log(`Listening on port: ${port}`);
});
