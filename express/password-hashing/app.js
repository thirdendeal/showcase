// Password Hashing
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_api_auth.asp

// ---------------------------------------------------------------------

// Password Security
//
// Never store plain text passwords - Always use strong hashing algorithms like bcrypt or Argon2
// Enforce strong passwords - Require minimum length, special characters, and numbers
// Implement password rotation - Prompt users to change passwords periodically

// ---------------------------------------------------------------------

const express = require("express");
const bodyParser = require("body-parser"); // express middleware

const bcrypt = require("bcrypt");

// ---------------------------------------------------------------------

const app = express();

// In-memory user database (use a database in production)

const users = [];

// ---------------------------------------------------------------------

app.use(bodyParser.json()); // parse application/json

// ---------------------------------------------------------------------

// Sign up route with password hashing

app.post("/signup", async (request, response) => {
  try {
    const { username, password } = request.body;

    if (users.find((user) => user.username === username)) {
      return response.status(400).json({ message: "Username already taken" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };

    users.push(newUser);

    response.status(201).json({
      message: "User registered successfully",
      userId: newUser.id,
    });
  } catch (error) {
    response.status(500).json({ message: "Error signing up" });
  }
});

// ---------------------------------------------------------------------

// Login route with password comparison

app.post("/login", async (request, response) => {
  try {
    const { username, password } = request.body;

    const user = users.find((user) => user.username === username);

    if (!user) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password with stored hash

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(401).json({ message: "Invalid credentials" });
    }

    // In a real app, generate and return a token

    response.json({
      message: "Login successful",
      userId: user.id,
    });
  } catch (error) {
    response.status(500).json({ message: "Error logging in" });
  }
});

// ---------------------------------------------------------------------

module.exports = app;
