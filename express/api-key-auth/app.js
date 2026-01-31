// API Key Authentication
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/nodejs/nodejs_api_auth.asp

// API keys are a simple way to authenticate clients to your API

// ---------------------------------------------------------------------

// Suitability: Server-to-Server
// Complexity: Low
// Security: Low-Medium

// ---------------------------------------------------------------------

// Best Practices for API Keys
//
// Store keys securely (environment variables, secret management services)
// Rotate keys regularly
// Use HTTPS to prevent key exposure
// Implement rate limiting per key

// ---------------------------------------------------------------------

const express = require("express");
const bodyParser = require("body-parser"); // express middleware

// ---------------------------------------------------------------------

const app = express();

// In-memory storage for API keys (use a database in production)

const apiKeys = new Map([
  ["abcdef", { owner: "Mobile App", permissions: ["read"] }],
  ["123456", { owner: "Web Client", permissions: ["read", "write"] }],
]);

// ---------------------------------------------------------------------

app.use(bodyParser.json()); // parse application/json

// ---------------------------------------------------------------------

// Middleware for API key authentication

const authenticateApiKey = (request, response, next) => {
  const apiKey = request.headers["x-api-key"] || request.query.apiKey;

  if (!apiKey) {
    return response.status(401).json({
      error: "Missing API key",
      docs: "https://example.com/your-api-docs/authentication",
    });
  }

  const keyData = apiKeys.get(apiKey);

  if (!keyData) {
    return response.status(403).json({ error: "Invalid API key" });
  }

  request.apiKeyData = keyData; // attach key data to request

  next();
};

// ---------------------------------------------------------------------

// Protected route using API key

app.get("/api/data", authenticateApiKey, (request, response) => {
  response.json({
    message: "Access granted",
    client: request.apiKeyData.owner,
    timestamp: new Date().toISOString(),
  });
});

// ---------------------------------------------------------------------

// Route requiring specific permission

app.post("/api/add", authenticateApiKey, (request, response) => {
  if (!request.apiKeyData.permissions.includes("write")) {
    return response.status(403).json({ error: "Insufficient permissions" });
  }

  response.json({ message: "Data created successfully" });
});

// ---------------------------------------------------------------------

// Route to generate a new API key (protected by admin auth in real apps)

function generateApiKey() {
  // Sample key generation logic

  return [...Array(32)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

app.post("/api/keys", (request, response) => {
  const apiKey = generateApiKey();

  const { owner, permissions } = request.body;
  apiKeys.set(apiKey, { owner, permissions });

  response.status(201).json({ apiKey });
});

// ---------------------------------------------------------------------

module.exports = { app, apiKeys };
