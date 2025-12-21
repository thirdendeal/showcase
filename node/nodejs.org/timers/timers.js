// Timers
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/discover-javascript-timers

// Zero delay setTimeout() as a browser-ready setImmediate()
//
// Avoids blocking the CPU on intensive tasks by queuing functions in the scheduler

// ---------------------------------------------------------------------
// setTimeout()
// ---------------------------------------------------------------------
//
// Execute a callback once after n milliseconds

setTimeout(() => {
  console.log("C");
}, 32);

// Zero delay will be execute as soon as possible, but after the current function

setTimeout(() => {
  console.log("B");
}, 0);

console.log("A");

// Function reference and a set of parameters signature

function print(value) {
  console.log(value);
}

setTimeout(print, 64, "D");

// Cancel the scheduled execution with its return value

const timeout = setTimeout(() => console.log("?"), 128);

clearTimeout(timeout);

// ---------------------------------------------------------------------
// setInterval()
// ---------------------------------------------------------------------
//
// Execute a callback indefinitely every n milliseconds

let intervalCounter = 1;

// Future calls run regardless of previous ones having finished or not

const interval = setInterval(() => {
  if (intervalCounter >= 10) {
    clearInterval(interval); // prevents the next call, not the current one
  }

  console.log(`setInterval up to 1000 ms: ${intervalCounter++ * 100} ms`);
}, 100);

// ---------------------------------------------------------------------
// Recursive setTimeout()
// ---------------------------------------------------------------------
//
// Future calls only run when their preceding call has finished

let timeoutCounter = 1;

function recursiveTimeout() {
  console.log(`setTimeout up to 1000 ms: ${timeoutCounter++ * 100} ms`);

  if (timeoutCounter <= 10) {
    setTimeout(recursiveTimeout, 100);
  }
}

setTimeout(recursiveTimeout, 1100);
