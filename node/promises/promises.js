// Promises
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs
//
// A Promise is a special object, a placeholder for a value that is not yet available but will be in the future

// Against callback hell
//
// Starting with ES6, JavaScript introduced Promises

import { setTimeout } from "node:timers/promises";

// ---------------------------------------------------------------------
// The new Promise() constructor
// ---------------------------------------------------------------------

// Promise states
//
// - Pending (Initial state): The asynchronous operation is still running
// - Fulfilled: The operation completed successfully, resolved with a value
// - Rejected: The operation failed, settled with a reason

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    setTimeout(1000).then(() => {
      resolve("fulfilled value"); // fulfilled and settled
    });
  } else {
    reject("rejected value"); // rejected and settled
  }

  // If an error is thrown inside the executor function, the Promise will be rejected with that error
});

console.log(myPromise); // Promise { <pending> }

// ---------------------------------------------------------------------
// Handling Promises
// ---------------------------------------------------------------------
//
// - .then() to handle a fullfiled promise and access its result
// - .catch() to handle a rejected promise and access any errors that may occur
// - .finally() to handle a settled promise

myPromise
  .then((result) => {
    console.log(`.then() block gets: "${result}"`);
  })
  .catch((error) => {
    console.log(`.catch() block gets: "${error}"`);
  })
  .finally(() => {
    console.log(".finally() block never gets anything");
  });

// When each block is defined matters

// ---------------------------------------------------------------------
// Chaining Promises
// ---------------------------------------------------------------------
//
// Chained promises always wait for the previous one to complete

const promiseA = setTimeout(1000).then(() => "A");

promiseA
  .then((result) => {
    console.log(result); // A

    return setTimeout(1000).then(() => "B (No timeout overlap)"); // promiseB
  })
  .then((result) => {
    console.log(result); // B
  })
  .catch((error) => {
    console.error(error); // handles the whole chain
  });
