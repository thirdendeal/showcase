// Vehicles
// ---------------------------------------------------------------------

// Props
// ---------------------------------------------------------------------

// Props are read-only
//
// You will get an error if you try to change their value

// ---------------------------------------------------------------------

// The Props Object
//
// A component receives its arguments as an object

function Car(props) {
  return <h3>I am a {props.brand}!</h3>; // it doesn't have to be named `props`
}

// <Car brand="" />

// ---------------------------------------------------------------------

// Multiple Properties
//
// You can send as many properties as you want

function DetailedCar(props) {
  return (
    <h3>
      I am a {props.color} {props.brand} {props.model} from {props.year}!
    </h3>
  );
}

// <Car brand="" model="" color="" year={} />

// ---------------------------------------------------------------------

// Different Data Types
//
// Strings can be sent inside quotes, send other data types inside curly brackets

// <Car brand="Ford" model="Mustang" color="red" year={1969} />

// ---------------------------------------------------------------------

// Destructuring Props
//
// You can limit the properties a component receives by using destructuring

// Default Values
//
// With Destructuring, you can set default values for props

function BlueEnthusiastCar({ color = "blue" }) {
  return <h3>My car is {color}!</h3>;
}

// <BlueEnthusiastCar [color=""] />

// ---------------------------------------------------------------------

// Props Children
//
// The content between the opening and closing tags of a component

function Garage(props) {
  return (
    <>
      <h2>Who lives in my Garage?</h2>

      {props.children}
    </>
  );
}

// <Garage> [...] </Garage>;

// ---------------------------------------------------------------------

export { Car, DetailedCar, BlueEnthusiastCar, Garage };
