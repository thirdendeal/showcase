// Lazy Tasks
// ---------------------------------------------------------------------

// Suspense
// ---------------------------------------------------------------------

// Using Suspense with lazy loading
//
// Loading components dynamically with React.lazy()
// Fallbacks even if the task is very fast

function FavoriteCars() {
  const cars = ["Volvo", "BMW", "Ford"];

  const carItems = cars.map((car, index) => {
    return <li key={index}>{car}</li>;
  });

  return (
    <div style={{ color: "blue" }}>
      <h3>My Favorite Cars</h3>

      <ul>{carItems}</ul>
    </div>
  );
}

// ---------------------------------------------------------------------

export default FavoriteCars;
