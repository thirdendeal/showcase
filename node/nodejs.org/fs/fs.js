// File System
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats

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
}

// ---------------------------------------------------------------------
// Asynchronous
// ---------------------------------------------------------------------

const fileA = join(__dirname, "test/test.txt");

fs.stat(fileA, (err, stats) => {
  if (err) {
    console.error(err);

    return;
  }

  printFileInfo(fileA, stats); // we have access to the file stats in `stats`
});

// ---------------------------------------------------------------------
// Synchronous
// ---------------------------------------------------------------------
//
// Blocks the thread until the file stats are ready

const fileB = join(__dirname, "test");

try {
  const stats = fs.statSync(fileB);

  printFileInfo(fileB, stats);
} catch (err) {
  console.error(err);
}
