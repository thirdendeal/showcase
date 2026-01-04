// State
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// The useState Hook allows us to track state in a function component

import { useState } from "react";

// ---------------------------------------------------------------------

// The setState Function
//
// When state is updated, the entire state gets overridden

function FavoriteColor() {
  const [color, setColor] = useState("red");

  // We should never directly update state (i.e.: color = "blue")

  // Use the spread operator to copy and then update objects
  //
  // setState(previousState => { ...previousState, color: "blue" })

  return (
    <>
      <h1>My favorite color is {color}!</h1>

      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}

// ---------------------------------------------------------------------

export default FavoriteColor;
