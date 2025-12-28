// Props
// ---------------------------------------------------------------------

import { createRoot } from "react-dom/client";

import { Car, DetailedCar } from "./Vehicles.jsx";

// ---------------------------------------------------------------------

const rootNode = document.getElementById("root");

createRoot(rootNode).render(
  <>
    <h1>More Cars!</h1>

    <Car brand="BMW" />
    <DetailedCar brand="Ford" model="Mustang" color="red" year={1969} />
  </>
);
