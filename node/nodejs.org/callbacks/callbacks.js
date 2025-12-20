// Callbacks
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/asynchronous-work/asynchronous-flow-control

// A callback is a function that's passed as a value to another function (called a higher-order function)

// Error-first callbacks
//
// The first parameter in any callback function is the error object
// If there is no error, the object is null

// Callback hell
//
// Where multiple nested functions with callbacks raise hell

// ---------------------------------------------------------------------
// Callback hell mitigation
// ---------------------------------------------------------------------

function initiator(callback) {
  // Code to get to initiatorValue...
  const initiatorValue = "This is an operation";

  middleware(initiatorValue, callback);
}

function middleware(initiatorValue, callback) {
  // Code to get to middlewareValue...
  const middlewareValue = `${initiatorValue} touched by middleware`;

  terminator(middlewareValue, callback);
}

function terminator(middlewareValue, callback) {
  // Code to get to terminatorValue...
  const terminatorValue = `${middlewareValue}, touched by terminator`;

  callback(terminatorValue);
}

// ---------------------------------------------------------------------

// Here latency is 0 because all values are available in memory

initiator(function (terminatorValue) {
  // terminatorValue = "This is an operation touched by middleware, touched by terminator"

  console.log(`${terminatorValue} and finished by a passed along callback`);
});
