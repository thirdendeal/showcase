// File System
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs

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
  console.log("Path?                  => " + `"${path}"`);
  console.log("Is it a file?          => " + stats.isFile());
  console.log("Is it a directory?     => " + stats.isDirectory());
  console.log("Is it a symbolic link? => " + stats.isDirectory());
  console.log("Bytes?                 => " + stats.size);

  console.log(); // neline separator
}

// ---------------------------------------------------------------------
//  Getting information out of a file
// ---------------------------------------------------------------------

const textFile = join(__dirname, "test/test.txt");

fs.stat(textFile, (err, stats) => {
  if (err) {
    console.error(err);

    return;
  }

  printFileInfo(textFile, stats);
});

// Synchronous version: fs.statSync()

const directory = join(__dirname, "test");

try {
  const stats = fs.statSync(directory);

  printFileInfo(directory, stats);
} catch (err) {
  console.error(err);
}

// ---------------------------------------------------------------------
// Reading files
// ---------------------------------------------------------------------
//
// readFile functions read the full content of the file in memory

fs.readFile(textFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log(`Content of "${textFile}":`);
  console.log(data);
});

// Synchronous version: fs.readFileSync()

// ---------------------------------------------------------------------
// Writing files
// ---------------------------------------------------------------------
//
// File system flags: https://nodejs.org/api/fs.html#file-system-flags

const newTextFile = join(__dirname, "test/ignore.txt");
const newTextFileContent = "This file was written by the file system script\n";

// fs.writeFile() default flag: "w"
//
// "w": Open file for writing, the file is created (if it does not exist) or truncated (if it exists)

fs.writeFile(newTextFile, newTextFileContent, (err) => {
  // Guard clause (return) alternative:

  if (err) {
    console.error(err);
  } else {
    console.log(`File "${newTextFile}" written successfully`);

    console.log(); // neline separator
  }
});

// Synchronous version: fs.writeFileSync()

// ---------------------------------------------------------------------

// fs.appendFile() default flag: "a"
//
// "a": Open file for appending, the file is created if it does not exist
// "ax": Like "a" but fails if the path exists

fs.appendFile(newTextFile, newTextFileContent, { flag: "ax" }, (err) => {
  if (err) {
    console.log(`Could not append ("ax") to "${newTextFile}"`);

    console.log(); // neline separator
  } else {
    // Won't reach
  }
});

// Synchronous version: fs.appendFileSync()
