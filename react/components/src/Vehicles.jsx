// Components (Vehicles.jsx)
// ---------------------------------------------------------------------
//
// Like functions, but  work in isolation and return HTML
// - Note that the filename must start with an uppercase character

// ---------------------------------------------------------------------

// Creating a Component
//
// The component's name MUST start with an upper case letter

function Car() {
  return <h2>Hi, I am a Car!</h2>; // React components return HTML code
}

// <Car />

// ---------------------------------------------------------------------

// Props
//
// Arguments can be passed into a component as props, which stands for properties

function ColorCar(props) {
  return <h2>I am a {props.color} Car!</h2>; // React components return HTML code
}

// <ColorCar color="" />

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

// <Garage />

// ---------------------------------------------------------------------

export { Car, ColorCar, Garage };
