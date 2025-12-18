// File System
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

import fs from "node:fs";

// ---------------------------------------------------------------------

// __dirname is not defined in ES module scope

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------------------------------------------------------------------

import { join } from "node:path";

// ---------------------------------------------------------------------

function printFileInfo(path, stats) {
  console.log("Path?                  => " + path);
  console.log("Is it a file?          => " + stats.isFile());
  console.log("Is it a directory?     => " + stats.isDirectory());
  console.log("Is it a symbolic link? => " + stats.isDirectory());
  console.log("Bytes?                 => " + stats.size);

  console.log(); // neline separator
}

// ---------------------------------------------------------------------
// Asynchronous
// ---------------------------------------------------------------------

const textFile = join(__dirname, "test/test.txt");

fs.stat(textFile, (err, stats) => {
  if (err) {
    console.error(err);

    return;
  }

  printFileInfo(textFile, stats); // we have access to the file stats in `stats`
});

// ---------------------------------------------------------------------
// Synchronous
// ---------------------------------------------------------------------
//
// Blocks the thread until the file stats are ready

const directory = join(__dirname, "test");

try {
  const stats = fs.statSync(directory);

  printFileInfo(directory, stats);
} catch (err) {
  console.error(err);
}

// ---------------------------------------------------------------------
// Reading files with Node.js
// ---------------------------------------------------------------------
//
// Node.js readFile functions read the full content of the file in memory before returning the data

// Alternatively, you can use the synchronous version fs.readFileSync()

fs.readFile(textFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log(`Content of "${textFile}":`);
  console.log(data);
});
