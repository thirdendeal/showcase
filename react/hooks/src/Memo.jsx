// Memo
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The React useMemo Hook returns a memoized value

import { useState, useMemo } from "react";

// ---------------------------------------------------------------------

const expensiveCalculation = (number) => {
  console.log("Running an expensive calculation...");

  for (let i = 0; i < 1000000000; i++) {
    number += 1;
  }

  return number;
};

// ---------------------------------------------------------------------

export const WithoutMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Initial Todo"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((previousTodos) => [...previousTodos, "New Todo"]);
  };

  const calculation = expensiveCalculation(count); // runs on every render

  const todoItems = todos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  return (
    <>
      <p>Without Memo</p>

      <p>Todos:</p>
      <ul>{todoItems}</ul>
      <p>Count: {count}</p>
      <p>Result (Count Based): {calculation}</p>

      <button onClick={addTodo}>Add Todo</button>
      <button onClick={increment}>Increase Count</button>
    </>
  );
};

// ---------------------------------------------------------------------

export const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Initial Todo"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((previousTodos) => [...previousTodos, "New Todo"]);
  };

  const calculation = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // expensiveCalculation only runs on count change

  const todoItems = todos.map((todo, index) => {
    return <li key={index}>{todo}</li>;
  });

  return (
    <>
      <p>With Memo</p>

      <p>Todos:</p>
      <ul>{todoItems}</ul>
      <p>Count: {count}</p>
      <p>Result (Count Based): {calculation}</p>

      <button onClick={addTodo}>Add Todo</button>
      <button onClick={increment}>Increase Count</button>
    </>
  );
};
