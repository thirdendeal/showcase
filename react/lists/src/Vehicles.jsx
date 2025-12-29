// Vehicles
// ---------------------------------------------------------------------

// Lists
// ---------------------------------------------------------------------

// In React, you will render lists with some type of loop

// ---------------------------------------------------------------------

// Keys in React Lists
//
// Keys allow React to keep track of elements
// Keys must be unique among siblings

function CarObjects({ objects }) {
  const items = objects.map((car) => {
    return (
      <li key={car.id}>
        I am a {car.brand} (id = {car.id})
      </li>
    );
  });

  return <ul>{items}</ul>;
}

// <CarObjects objects={} \>

// ---------------------------------------------------------------------

// Using an Index as a Key
//
// Not recommended for dynamic lists, unless:
//
// - The list will never be reordered or filtered
// - The items in the list have no IDs

function CarStrings({ strings }) {
  // Not recommended for dynamic lists

  const items = strings.map((car, index) => {
    return (
      <li key={index}>
        I am a {car} (index = {index})
      </li>
    );
  });

  return <ul>{items}</ul>;
}

// <CarStrings strings={} \>

// ---------------------------------------------------------------------

export { CarObjects, CarStrings };
