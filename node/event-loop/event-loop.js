// Event Loop
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs
// https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking
// https://nodejs.org/en/learn/asynchronous-work/understanding-setimmediate

// Phases of the event loop
//
// timers:              setTimeout() and setInterval() callbacks
// pending callbacks:   some system operation callbacks (mostly internal use)
// idle, prepare:       (internal use only)
// poll:                I/O events and callbacks (almost all callbacks)
// check:               setImmediate() callbacks
// close callbacks:     close() and on("close") like callbacks

// "I/O" refers primarily to interaction with the system's disk and network

// What's in a phase
//
// A queue and a hard maximum of callbacks to be exhausted
// At which point the event loop will move to the next phase

// ---------------------------------------------------------------------

// Event loop queues (in execution order)
//
// process.nextTick               process.nextTick queue
// Promise.then()                 promises microtask queue
// setTimeout and setimmediate    macrotask queue

// ---------------------------------------------------------------------

import fs from "node:fs";

// ---------------------------------------------------------------------

// __filename is not defined in ES module scope

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// ---------------------------------------------------------------------
// Concurrency and Throughput
// ---------------------------------------------------------------------
//
// The event loop must continue running as non-JavaScript operations are taking place

let value;

function someAsyncApiCall(callback) {
  setImmediate(callback); // the script still has the ability to run to completion
}

someAsyncApiCall(() => {
  console.log(value); // 1
});

value = "Immediate callback A executed"; // not reached if not for the setImmediate

// ---------------------------------------------------------------------
// setImmediate() vs process.nextTick()
// ---------------------------------------------------------------------
//
// setImmediate() fires on the following iteration or 'tick' of the event loop
// process.nextTick() fires immediately on the same phase
//
// setImmediate() is recommended in all cases

setImmediate(() => {
  console.log("Immediate callback B executed");
});

console.log("Synchronous task A executed");

// process.nextTick() may starve I/O
//
// All next tick callbacks are resolved before the event loop continues
// This may prevent the event loop from reaching the poll phase
// That's also why it will always execute before setTimeout and setImmediate

// ---------------------------------------------------------------------
// setImmediate() vs zero delay setTimeout
// ---------------------------------------------------------------------
//
// If not within an I/O cycle (i.e. the main module)
// - The order in which the two timers are executed is non-deterministic
// If within an I/O cycle (i.e. readFile)
// - The immediate callback is always executed first

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("I/O cycle zero delay timeout executed");
  }, 0);

  setImmediate(() => {
    console.log("I/O cycle immediate callback executed");
  });
});
