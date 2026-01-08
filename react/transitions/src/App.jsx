// App
// ---------------------------------------------------------------------

// Transitions
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_transitions.asp

// The useTransition Hook
//
// Lets you mark some state updates as "non-urgent", allowing other updates to happen first
// The useTransition hook returns two items:
//
// - isPending: tells you if a transition is active
// - startTransition: function to mark updates as transitions

// Only Non-Urgent
//
// Typing in an input field should be urgent
// But filtering a large list can be a transition

import { useState, useTransition } from "react";

// ---------------------------------------------------------------------

function SlowSearch({ query }) {
  const items = [];

  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(
        <li key={i}>
          Result for {query} - {i}
        </li>
      );
    }
  }

  return <ul>{items}</ul>;
}

// ---------------------------------------------------------------------

function App() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  const [isPending, startTransition] = useTransition();

  const handleChange = (event) => {
    setText(event.target.value);

    startTransition(() => {
      setQuery(event.target.value); // while updating, isPending is true
    });
  };

  return (
    <div>
      <h1>Transition Search</h1>

      <input type="text" value={text} onChange={handleChange} />

      {isPending && <p>Loading results...</p>}

      <SlowSearch query={query} />
    </div>
  );
}

// ---------------------------------------------------------------------

export default App;
