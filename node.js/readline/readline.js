// Readline
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs

// Get input from a readable stream

import readline from "node:readline";

// ---------------------------------------------------------------------

const rl = readline.createInterface({
  input: process.stdin, // the terminal input, one line at a time
  output: process.stdout,
});

rl.question(`What's your name?\n`, (name) => {
  console.log(`Hi ${name}!`);

  rl.close();
});
