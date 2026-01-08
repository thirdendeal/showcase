// App
// ---------------------------------------------------------------------

// Portals
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_portals.asp

// A way to render HTML outside the parent component's DOM hierarchy

import { useState } from "react";

import { PortalModal, PortalButton } from "./Portals.jsx";

// ---------------------------------------------------------------------

// Event Bubbling in Portals
//
// Events still bubble up as if there were no portals

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [divCount, setDivCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  const div = {
    padding: "20px",
    border: "2px solid black",
    margin: "20px",
  };

  const divClick = () => {
    setDivCount((count) => count + 1);
  };

  const buttonClick = () => {
    setButtonCount((count) => count + 1);
  };

  return (
    <>
      <div>
        <h1>My App</h1>

        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <PortalModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2>Modal Content</h2>

          <p>This is rendered outside the App component!</p>
        </PortalModal>
      </div>

      <div style={div} onClick={divClick}>
        <h2>Div Clicked: {divCount}</h2>
        <h2>Button Clicked: {buttonCount}</h2>

        <p>
          Event bubbling works through React's component hierarchy, not the DOM
          hierarchy
        </p>

        <PortalButton onClick={buttonClick}>Floating Button</PortalButton>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
