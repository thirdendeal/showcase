// Promises - Async/Await
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs

// Against Promise chains
//
// Starting with ES2017, JavaScript introduced Async/Await

import { setTimeout } from "node:timers/promises";

// ---------------------------------------------------------------------
// Using Async/Await with Promises
// ---------------------------------------------------------------------

// async is used to define a function that returns a Promise

async function performTasks() {
  try {
    // await is used inside an async function to pause execution until a Promise settles

    const resultA = await setTimeout(1000).then(() => "A");
    console.log(resultA);

    const resultC = await setTimeout(1000).then(() => "C");
    console.log(resultC);
  } catch (error) {
    console.error(error);
  }
}

performTasks();

// ---------------------------------------------------------------------

// Top-Level Await (When using ECMAScript Modules)
//
// The module itself is treated as a top-level scope, so you can await at the top level

try {
  const resultB = await setTimeout(1000).then(() => "B (Overlaps A and C)");

  console.log(resultB);
} catch (error) {
  console.error(error);
}
