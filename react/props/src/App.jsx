// App
// ---------------------------------------------------------------------

// Props
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_props.asp

// Props are arguments passed into React components via HTML attributes

import { Car, DetailedCar, BlueEnthusiastCar, Garage } from "./Vehicles.jsx";

// ---------------------------------------------------------------------

function App() {
  return (
    <>
      <h1>More Cars!</h1>

      <Garage>
        <Car brand="BMW" />
        <BlueEnthusiastCar />
        <DetailedCar brand="Ford" model="Mustang" color="red" year={1969} />
      </Garage>
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
