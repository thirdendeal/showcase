// File System
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs
// https://nodejs.org/en/learn/manipulating-files/working-with-file-descriptors-in-nodejs
// https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs

import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------

// __dirname is not defined in ES module scope

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ---------------------------------------------------------------------

function printFileInfo(path, stats) {
  console.log(`"${path}"`);

  console.log(".isFile() =>", stats.isFile());
  console.log(".isDirectory() =>", stats.isDirectory());
  console.log(".isSymbolicLink() =>", stats.isSymbolicLink());

  console.log(".size() =>", stats.size); // in bytes

  console.log(); // newline separator
}

// ---------------------------------------------------------------------
//  Getting information out of a file
// ---------------------------------------------------------------------

const textFile = path.join(__dirname, "test/test.txt");

fs.stat(textFile, (err, stats) => {
  if (err) {
    console.error(err);

    return;
  }

  printFileInfo(textFile, stats);
});

// Synchronous version: fs.statSync()

const directory = path.join(__dirname, "test");

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

  console.log(`Content of "${textFile}":`, data);
});

// Synchronous version: fs.readFileSync()

// ---------------------------------------------------------------------
// Writing files
// ---------------------------------------------------------------------
//
// File system flags: https://nodejs.org/api/fs.html#file-system-flags

const newTextFile = path.join(__dirname, "test/ignore.txt");
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

    console.log(); // newline separator
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

    console.log(); // newline separator
  } else {
    // Won't reach
  }
});

// Synchronous version: fs.appendFileSync()

// ---------------------------------------------------------------------
// Working with file descriptors
// ---------------------------------------------------------------------
//
// A file descriptor is a reference to an open file

// fs.open() default flag: "r"
//
// "r": Open file for reading, an exception occurs if the file does not exist

fs.open(textFile, "r", (err, fdA) => {
  if (err) {
    console.error(err);

    return;
  }

  fs.open(textFile, "r", (err, fdB) => {
    if (err) {
      console.error(err);

      return;
    }

    // Here a file descriptor (fd) is a number that uniquely identifies an open file

    console.log(`1st file descriptor: ${fdA}`);
    console.log(`2nd file descriptor: ${fdB}`);

    console.log(); // newline separator
  });
});

// Synchronous version: fs.openSync ()

// ---------------------------------------------------------------------
// Working with directories
// ---------------------------------------------------------------------

// lstat: if symbolic link, then it returns information about the link itself

const directoryContentBySize = fs
  .readdirSync(directory) // returns their relative path
  .map((file) => {
    return path.join(directory, file); // gets you the absolute path
  })
  .sort((fileA, fileB) => {
    return fs.lstatSync(fileA).size - fs.lstatSync(fileB).size;
  })
  .map((file) => {
    return path.basename(file);
  });

// Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory

console.log('Contents of "test" directory by size:');
console.log(directoryContentBySize);

console.log(); // newline separator
