// Callback
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useCallback Hook is used to memoize a function (cache its result)

// useCallback(callback, dependencies) -> memoizedFunction

import React, { useState, useCallback } from "react";

// ---------------------------------------------------------------------

const Button = React.memo(({ onClick, text }) => {
  console.log(`${text} rendered`);

  return <button onClick={onClick}>{text}</button>;
});

// ---------------------------------------------------------------------

export function WithoutCallback() {
  console.log("Parent (without callback memoization) rendered");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are recreated on every render

  const handleClick1 = () => {
    setCount1(count1 + 1);
  }; // rerender both Button 1 and Button 2

  const handleClick2 = () => {
    setCount2(count2 + 1);
  }; // rerender both Button 1 and Button 2

  return (
    <div>
      <p>Without useCallback:</p>

      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>

      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

// ---------------------------------------------------------------------

export function WithCallback() {
  console.log("Parent (with callback memoization) rendered");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // These functions are memoized and only recreated when dependencies change

  const handleClick1 = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]); // rerender Parent and Button 1, but not Button 2

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]); // rerender Parent and Button 2, but not Button 1

  return (
    <div>
      <p>With useCallback:</p>

      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>

      <Button onClick={handleClick1} text="Button 1 (Memoized)" />
      <Button onClick={handleClick2} text="Button 2 (Memoized)" />
    </div>
  );
}
