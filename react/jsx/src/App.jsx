// App
// ---------------------------------------------------------------------

// JSX
// ---------------------------------------------------------------------

// JSX stands for JavaScript XML, an extension of JavaScript

import React from "react";

// ---------------------------------------------------------------------

const headingA = <h2>I Love JSX!</h2>; // with JSX
const headingB = React.createElement("h2", {}, "I do not use JSX!"); // without JSX

// ---------------------------------------------------------------------

// To write HTML on multiple lines, put the HTML inside parentheses

const unorderedList = (
  <ul>
    <li>Unordered list item A</li>
    <li>Unordered list item B</li>
    <li>Unordered list item C</li>
  </ul>
);

// ---------------------------------------------------------------------

// One Top Level Element
//
// The HTML code must be wrapped in ONE top level element

const divParagraphs = (
  <div>
    <p>My parent is a div</p>
    <p>My parent is a div, too</p>
  </div>
);

// You can use a "fragment" (an empty HTML tag) too

const paragraphs = (
  <>
    <p>My parent is a fragment</p>
    <p>My parent is a fragment, too</p>
  </>
);

// ---------------------------------------------------------------------

// Elements Must be Closed
//
// JSX follows XML rules, therefore all HTML elements must be closed

const horizontalRule = <hr />;

// ---------------------------------------------------------------------

// Expressions in JSX
//
// JSX will execute expressions inside curly braces and return their result

let myJavaScriptValue = 1;

const divOne = <div>x = {myJavaScriptValue++}</div>;
const divTwo = <div>x + 1 = {myJavaScriptValue}</div>;

// ---------------------------------------------------------------------

// Expressions as Attribute Values
//
// Must not be wrapped in quotes, otherwise JSX will treat them as string literals

const title = "You found me!";

const paragraphOne = <p title={title}>Hover me (JSX expression)</p>;
const paragraphTwo = (
  <p title="{title}">Hover me (JSX expression string literal)</p>
);

// ---------------------------------------------------------------------

// className
//
// Since class is a reserved word in JavaScript, use attribute className instead

const mark = <mark className="my-class"></mark>;

// ---------------------------------------------------------------------

// camelCase Event Attributes
//
// Event attributes in JSX are written in camelCase, just like className

function helloWorld() {
  alert("Hello, World!");
}

const button = <button onClick={helloWorld}>ALERT</button>; // onClick instead of onclick

// ---------------------------------------------------------------------

// JSX Conditionals
//
// Only the ternary operator is supported inside JSX

const mood = "sweets";
const emphasis = <em>{mood === "sweets" ? "chocolate" : "bread"}</em>;

// ---------------------------------------------------------------------

// The style Attribute
//
// Accepts a JavaScript object with camelCased CSS property names, rather than a CSS string

const inlineStyles = {
  backgroundColor: "lightyellow",
  color: "red",
  fontSize: "20px",
};

// ---------------------------------------------------------------------

// JSX in React Components
//
// React components are like JavaScript functions, and return HTML

function App() {
  return (
    // Comments outside of JSX are written like this
    <div>
      {/* Comments inside JSX are written like this, and are NOT preserved */}
      <h1 style={inlineStyles}>JSX</h1>
      {headingA}
      {unorderedList}
      {divParagraphs}
      {paragraphs}
      {horizontalRule}
      {divOne}
      {divTwo}
      {paragraphOne}
      {paragraphTwo}
      {mark}
      {button}
      <br />
      <br />
      {emphasis}
      {headingB}
      ...
    </div>
  );
}

// ---------------------------------------------------------------------

export default App;
