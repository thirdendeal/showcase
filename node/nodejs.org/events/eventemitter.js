// Event Emitter
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter

import EventEmitter from "node:events";

// ---------------------------------------------------------------------

const eventEmitter = new EventEmitter();

// ---------------------------------------------------------------------

// Add a callback to be executed when the event is triggered

eventEmitter.on("start", () => {
  console.log("started with nothing");
});

// Trigger an event

eventEmitter.emit("start");

// ---------------------------------------------------------------------

eventEmitter.on("end", (a, b) => {
  console.log(`ended with two arguments: ${a} and ${b}`);
});

// Pass arguments to the event handler

eventEmitter.emit("end", "A", "B");
