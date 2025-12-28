// Components
// ---------------------------------------------------------------------
//
// Like functions, but  work in isolation and return HTML

import { createRoot } from "react-dom/client";

import { ColorCar, Garage } from "./Vehicles.jsx";

// ---------------------------------------------------------------------

const rootNode = document.getElementById("root");

createRoot(rootNode).render(
  <>
    <Garage />
    <ColorCar color="red" />
  </>
);
