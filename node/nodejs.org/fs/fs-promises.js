// File System - Promises
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs
// https://nodejs.org/docs/latest/api/fs.html
//
// The Promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread
// These operations are not synchronized or threadsafe
// Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur

import fsPromises from "node:fs/promises";
import path from "node:path";

// ---------------------------------------------------------------------

// __dirname is not defined in ES module scope

import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------------------------------------------------------------------

async function printContent(file) {
  try {
    const data = await fsPromises.readFile(file, "utf8");

    console.log(`Content of "${file}":`, data);
  } catch (err) {
    console.error(err);
  }
}

// ---------------------------------------------------------------------

const textFile = path.join(__dirname, "files/test.txt");

printContent(textFile);
console.log("Not done reading yet...");
