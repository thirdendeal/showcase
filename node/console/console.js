// Console
// ---------------------------------------------------------------------
//
// https://nodejs.org/en/learn/command-line/output-to-the-command-line-using-nodejs

// Basically the same as the console object you find in the browser

// ---------------------------------------------------------------------
// Basic output using the console module
// ---------------------------------------------------------------------

// An object will be rendered as a string

console.log({ property: "value" }); // { property: 'value' }

// Multiple arguments are printed on the same line

console.log("x", "y", "z"); // x y z

// Printf-like format string and format specifiers:
//
// - %s as a string
// - %d as a number
// - %i as an integer part only
// - %f as a float
// - %j as JSON
// - %o as an object, including non-enumerable properties and proxies
// - %O as an object, not including non-enumerable properties and proxies
// - %c this specifier is ignored
// - %% as a single percent sign, this does not consume an argument

console.log("My %s-like formatted string", "printf");

// Object format specifiers

console.log("Number including non-enumerable properties and proxies:");
console.log("%o", Number); // <ref *1> [Function: Number] { ...

console.log("Number NOT including non-enumerable properties and proxies:");

// console.log(Number); // [Function: Number]
console.log("%O", Number); // [Function: Number]

// ---------------------------------------------------------------------
// Counting elements
// ---------------------------------------------------------------------

// Prints the number of times a string was printed next to it

const x = 1;
const y = 2;

console.count("string: " + x + " count"); // string: 1 count: 1
console.count("string: " + x + " count"); // string: 1 count: 2

console.count("string: " + y + " count"); // string: 2 count: 1

// Reset counting

const oranges = ["orange", "orange"];

console.log("Count oranges");

oranges.forEach((orange) => {
  console.count(orange);
});

// orange: 1
// orange: 2

console.log("Reset orange count");
console.log("Count oranges");

console.countReset("orange");

oranges.forEach((orange) => {
  console.count(orange);
});

// orange: 1
// orange: 2

// ---------------------------------------------------------------------
// Print the stack trace
// ---------------------------------------------------------------------

// Function declaration

function functionA() {
  functionB();
}

// Function expression

const functionB = function () {
  functionC();
};

// Arrow function

const functionC = () => console.trace();

// functionA > functionB > functionC

functionA();

// ---------------------------------------------------------------------
// stdout and stderr
// ---------------------------------------------------------------------

// Prints to the standard error stream

console.error("Hello, STDERR!");

// ---------------------------------------------------------------------
// Color the output
// ---------------------------------------------------------------------

// Node.js supports ESM / ES Modules / ECMAScript Modules

import { styleText } from "node:util";

const redStyleText = styleText(["red"], "This is red text ");
const greenBoldStyleText = styleText(
  ["green", "bold"],
  "and this is green bold text "
);

const text = "this is normal text";

console.log(redStyleText + greenBoldStyleText + text);
