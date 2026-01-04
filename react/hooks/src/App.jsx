// App
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// Functions that hook into React state and lifecycle features

// Hook Rules
//
// - Hooks can only be called inside React function components
// - Hooks can only be called at the top level of a component
// - Hooks cannot be conditional

import FavoriteColor from "./State.jsx";
import Timer from "./Effect.jsx";
import { ByChainA, ByContextA } from "./Context.jsx";
import DOMElementReference from "./Ref.jsx";
import Score from "./Reducer.jsx";

// ---------------------------------------------------------------------

function App() {
  return (
    <>
      <h1>Hooks</h1>

      <h2>State</h2>
      <FavoriteColor />

      <h2>Effect</h2>
      <Timer />

      <h2>Context</h2>
      <ByChainA />
      <br />
      <ByContextA />

      <h2>Ref</h2>
      <DOMElementReference />

      <h2>Reducer</h2>
      <Score />
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
