// Props (Vehicles.jsx)
// ---------------------------------------------------------------------
//
// Props are arguments passed into React components via HTML attributes

// Props are read-only
//
// You will get an error if you try to change their value

// ---------------------------------------------------------------------

// The Props Object
//
// A component receives its arguments as an object

function Car(props) {
  return <h2>I am a {props.brand}!</h2>; // it doesn't have to be named `props`
}

// <Car brand="" />

// ---------------------------------------------------------------------

// Multiple Properties
//
// You can send as many properties as you want

function DetailedCar(props) {
  return (
    <h2>
      I am a {props.color} {props.brand} {props.model} from {props.year}!
    </h2>
  );
}

// <Car brand="" model="" color="" year={} />

// ---------------------------------------------------------------------

// Different Data Types
//
// Strings can be sent inside quotes, send other data types inside curly brackets

// <Car brand="Ford" model="Mustang" color="red" year={1969} />

// ---------------------------------------------------------------------

export { Car, DetailedCar };
