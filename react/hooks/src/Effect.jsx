// Effect
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useEffect Hook allows you to perform side effects in your components

// Side Effect Examples
//
// - Fetching data
// - Directly updating the DOM
// - Timers

// useEffect(<function>, <dependency>) -> None

import { useState, useEffect } from "react";

// ---------------------------------------------------------------------

// Every Render
//
// useEffect(() => { ... });

// First Render Only
//
// useEffect(() => { ... }, []);

// First Render And On Dependency Change
//
// useEffect(() => { ... }, [valueA, valueB, ...]);

function Timer() {
  const [count, setCount] = useState(0);

  // every render form
  useEffect(() => {
    setTimeout(() => {
      // when count changes, a new render will happen
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h3>I've rendered {count} times!</h3>;
}

// ---------------------------------------------------------------------

export default Timer;
