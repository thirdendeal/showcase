// Props
// ---------------------------------------------------------------------

import { createRoot } from "react-dom/client";

import { Car, DetailedCar, BlueEnthusiastCar, Garage } from "./Vehicles.jsx";

// ---------------------------------------------------------------------

const rootNode = document.getElementById("root");

createRoot(rootNode).render(
  <>
    <h1>More Cars!</h1>

    <Garage>
      <Car brand="BMW" />
      <BlueEnthusiastCar />
      <DetailedCar brand="Ford" model="Mustang" color="red" year={1969} />
    </Garage>
  </>
);
