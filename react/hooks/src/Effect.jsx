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
    let timer = setTimeout(() => {
      // when count changes, a new render will happen
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return <>I've rendered {count} times!</>;
}

// ---------------------------------------------------------------------

export default Timer;
