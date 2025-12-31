// App
// ---------------------------------------------------------------------

// Forward Reference
// ---------------------------------------------------------------------

// Lets your component pass a React reference to one of its children

import { forwardRef, useRef } from "react";

// ---------------------------------------------------------------------

// Common uses for forwardRef
//
// - Focusing input elements
// - Triggering animations
// - Measuring DOM elements
// - Integrating with third-party libraries

const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />; // later used for focusing
});

// ---------------------------------------------------------------------

function App() {
  const myReference = useRef();

  const handleClick = () => {
    myReference.current.focus();
  };

  return (
    <div>
      <MyInput ref={myReference} placeholder="Type here..." />

      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
// ---------------------------------------------------------------------

export default App;
