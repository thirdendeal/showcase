// Vehicles
// ---------------------------------------------------------------------

// Note that the filename must start with an uppercase character

// ---------------------------------------------------------------------

// Creating a Component
//
// The component's name MUST start with an upper case letter

function Car() {
  return <h2>Hi, I am a Car!</h2>; // React components return HTML code
}

// To use a component refer to it like an empty tag

// ---------------------------------------------------------------------

// Props
//
// Arguments can be passed into a component as props, which stands for properties

function ColorCar(props) {
  return <h2>I am a {props.color} Car!</h2>; // React components return HTML code
}

// To pass a property to a component use an attribute

// ---------------------------------------------------------------------

// Components inside Components
//
// We can refer to components inside other components

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

// ---------------------------------------------------------------------

export { Car, ColorCar, Garage };
