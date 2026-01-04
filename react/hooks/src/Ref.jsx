// Reference
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useRef Hook allows you to persist values between renders

import { useRef } from "react";

// ---------------------------------------------------------------------

// Accessing DOM Elements
//
// The useRef Hook is often used to access DOM elements directly

function DOMElementReference() {
  const inputElement = useRef();

  const handleClick = () => {
    inputElement.current.focus();
  };

  // We attach a ref to a DOM element using the ref attribute in JSX

  return (
    <>
      <input type="text" ref={inputElement} />

      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

// ---------------------------------------------------------------------

export default DOMElementReference;
