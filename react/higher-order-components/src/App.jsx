// App
// ---------------------------------------------------------------------

// Higher Order Components
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_hoc.asp

// Functions that take a component and return a new component

function withBorder(Component) {
  return function NewComponent(props) {
    return (
      <div style={{ border: "2px solid black", padding: "1em" }}>
        <Component {...props} />
      </div>
    );
  };
}

// ---------------------------------------------------------------------

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

const GreetingWithBorder = withBorder(Greeting);

// ---------------------------------------------------------------------

function App() {
  return (
    <div>
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
    </div>
  );
}

// ---------------------------------------------------------------------

export default App;
