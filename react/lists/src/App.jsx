// App
// ---------------------------------------------------------------------

// Lists
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_lists.asp

import { CarObjects, CarStrings } from "./Vehicles.jsx";

// ---------------------------------------------------------------------

function App() {
  const carObjects = [
    { id: 1001, brand: "Ford" },
    { id: 1002, brand: "BMW" },
    { id: 1003, brand: "Audi" },
  ];

  return (
    <>
      <h1>My Car Lists</h1>

      <h2>ID as Key</h2>
      <CarObjects objects={carObjects} />

      <h2>Index as Key</h2>
      <CarStrings strings={["Ford", "BMW", "Audi"]} />
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
