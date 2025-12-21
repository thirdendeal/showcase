// Hello, World!
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line
// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

// Node.js
//
// An open-source and cross-platform JavaScript runtime environment

// Under the hood
//
// Runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser
// JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution
// A Node.js app runs in a single process, without creating a new thread for every request
// WebAssembly, a high-performance language that can be compiled from various languages, is also supported

// The libuv C library
//
// Implements the event loop and all of the asynchronous behaviors of the platform

// Asynchronous Programming
//
// JavaScript is single threaded (cannot run in parallel) and synchronous by default
// At its core, JavaScript is designed to be non-blocking on the "main" thread

// Blocking
//
// When additional JavaScript must wait until a non-JavaScript operation completes

// Non-blocking by default
//
// All of the I/O methods in the Node.js standard library provide asynchronous versions
// Some methods also have blocking counterparts, which have names that end with Sync

// Asynchronous design philosophy
//
// An API should always be asynchronous even where it doesn't have to be

// ---------------------------------------------------------------------

console.log("Hello, World!");
