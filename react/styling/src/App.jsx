// App
// ---------------------------------------------------------------------

// Styling
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_css_styling.asp

// Linked At Import
//
// CSS that isn't properly scoped will affect the entire page

import Inline from "./Inline.jsx";
import Import from "./Import.jsx"; // use classes to scope
import Module from "./Module.jsx"; // use dynamically named classes to scope

// ---------------------------------------------------------------------

function App() {
  return (
    <>
      <h1>Styling React Using CSS</h1>

      <Inline />
      <Import />
      <Module />
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
