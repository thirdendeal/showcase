// Promises - Static Methods
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs

import { setTimeout } from "node:timers/promises";

// ---------------------------------------------------------------------
// Promise.all()
// ---------------------------------------------------------------------
//
// This method accepts an array of Promises and returns a new Promise that resolves once all the Promises are fulfilled
// If any Promise is rejected, Promise.all() will immediately reject
// However, even if rejection occurs, the Promises continue to execute
// When handling a large number of Promises, especially in batch processing, using this function can strain the system's memory

const fetchData1 = setTimeout(1000).then(() => "Promise.all Data from API 1");
const fetchData2 = setTimeout(2000).then(() => "Promise.all Data from API 2");

Promise.all([fetchData1, fetchData2])
  .then((results) => {
    console.log(results); // ['Data from API 1', 'Data from API 2']
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ---------------------------------------------------------------------
// Promise.allSettled()
// ---------------------------------------------------------------------
//
// This method waits for all promises to either resolve or reject
// Returns an array of objects that describe the outcome of each Promise
// Unlike Promise.all(), Promise.allSettled() does not short-circuit on failure
// It waits for all promises to settle, even if some reject

// Promise.reject() and Promise.resolve()
//
// These methods create a rejected or resolved Promise directly

const promise1 = Promise.resolve("Promise.allSettled Success");
const promise2 = Promise.reject("Promise.allSettled Failed");

Promise.allSettled([promise1, promise2]).then((results) => {
  console.log(results);
  // [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
});

// ---------------------------------------------------------------------
// Promise.race()
// ---------------------------------------------------------------------
//
// This method resolves or rejects as soon as the first Promise settles
// Regardless of which promise settles first, all promises are fully executed

const task1 = setTimeout(2000).then(() => "Promise.race Task 1 done");
const task2 = setTimeout(1000).then(() => "Promise.race Task 2 done");

Promise.race([task1, task2]).then((result) => {
  console.log(result); // 'Task 2 done' (since task2 finishes first)
});

// ---------------------------------------------------------------------
// Promise.any()
// ---------------------------------------------------------------------
//
// This method resolves as soon as one of the Promises resolves
// If all promises are rejected, it will reject with an AggregateError

const api1 = setTimeout(2000).then(() => "Promise.any API 1 success");
const api2 = setTimeout(1000).then(() => "Promise.any API 2 success");
const api3 = setTimeout(1500).then(() => "Promise.any API 3 success");

Promise.any([api1, api2, api3])
  .then((result) => {
    console.log(result); // 'API 2 success' (since it resolves first)
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });

// ---------------------------------------------------------------------
// Promise.try()
// ---------------------------------------------------------------------
//
// Executes a given function and wraps the result in a Promise
// Whether the function is synchronous or asynchronous
// Making it easier to handle both sync and async errors in one place

function mightThrow() {
  if (Math.random() > 0.5) {
    throw new Error("Oops, something went wrong!");
  }

  return "Success!";
}

// Particularly useful for starting promise chains in a consistent way

Promise.try(mightThrow)
  .then((result) => {
    console.log("Promise.try result:", result);
  })
  .catch((err) => {
    console.error("Promise.try caught error:", err.message);
  });

// ---------------------------------------------------------------------
// Promise.withResolvers()
// ---------------------------------------------------------------------
//
// Creates a new Promise along with its associated resolve and reject functions
// Returns them in a convenient object
// So to create a promise but resolve or reject it later from outside the executor function

const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(1000, () => {
  resolve("Resolved successfully!");
});

promise.then((value) => {
  console.log("Success:", value);
});
