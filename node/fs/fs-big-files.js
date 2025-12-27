// File System - Big Files
// ---------------------------------------------------------------------
//
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
// Reading files
// ---------------------------------------------------------------------

// A better option to read the content of big files is using streams

async function readFile(filePath) {
  const readStream = fs.createReadStream(filePath, { encoding: "utf8" });

  let chunkCount = 0;

  try {
    for await (const chunk of readStream) {
      chunkCount++;

      console.log(`=> Chunk ${chunkCount} start`);
      console.log(chunk);
      console.log(`=> Chunk ${chunkCount} end`);
    }

    console.log(`=> Finished reading "${filePath}" in ${chunkCount} chunks`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

const bigTextFile = join(__dirname, "files/one-hundred-thousand-numbers.txt");

try {
  await readFile(bigTextFile);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
