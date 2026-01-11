// Static Files
// ---------------------------------------------------------------------
//
// https://expressjs.com/en/starter/static-files.html
// https://expressjs.com/en/advanced/best-practice-performance.html#use-a-reverse-proxy

// Use a Reverse Proxy
//
// For tasks that do not require the application state
// This frees up Express to perform specialized application tasks

import express from "express";

// ---------------------------------------------------------------------

// __dirname is not defined in ES module scope

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------------------------------------------------------------------

import { join } from "node:path";

// ---------------------------------------------------------------------

const app = express();

// The express.static built-in middleware function
//
// express.static(root, [options])

// Multiple Static Assets Directories
//
// Call the express.static middleware function multiple times

// Relative to the Process
//
// Root is relative to the directory from where you launch the node process
// It’s safer to use the absolute path

const root = join(__dirname, "public");

app.use(express.static(root)); // "public" is not part of the URL

// ---------------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
