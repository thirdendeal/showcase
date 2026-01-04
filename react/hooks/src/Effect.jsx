// Effect
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useEffect Hook allows you to perform side effects in your components

// Synchronization
//
// Effects are intended to synchronize state between React and external systems
//
// - Update external systems with the latest state from React
// - Subscribe for updates from some external system, calling setState in a callback function when external state changes
// - Fetching data
// - Directly updating the DOM
// - Timers

// useEffect(<function>, [dependency]) -> None

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

// ---------------------------------------------------------------------

// Effect Cleanup
//
// To reduce memory leaks return function at the end of the useEffect Hook

function Timer() {
  const [count, setCount] = useState(0);

  // every render form
  useEffect(() => {
    // infinite chain of updates by rerendering count
    let timer = setTimeout(setCount, 1000, (count) => count + 1);

    return () => clearTimeout(timer);
  });

  return <p>I've rendered {count} times!</p>;
}

// ---------------------------------------------------------------------

export default Timer;
