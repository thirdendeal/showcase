// Tasks
// ---------------------------------------------------------------------

// Suspense
// ---------------------------------------------------------------------

// Using Suspense with a blocking task
//
// Data fetching with suspense-enabled frameworks

function fetchFruitData() {
  return new Promise((resolve) => {
    // Fake a delay of two seconds

    setTimeout(() => {
      resolve(["Apple", "Banana", "Cherry"]);
    }, 2000);
  });
}

let fruitResource = {
  data: null,
  read() {
    if (this.data !== null) return this.data;
    throw fetchFruitData().then((result) => (this.data = result));
  },
};

export function FavoriteFruits() {
  const fruits = fruitResource.read();

  const fruitItems = fruits.map((fruit, index) => {
    return <li key={index}>{fruit}</li>;
  });

  return (
    <div style={{ color: "blue" }}>
      <h3>My Favorite Fruits</h3>

      <ul>{fruitItems}</ul>
    </div>
  );
}

// ---------------------------------------------------------------------

// Using Suspense with a very fast task
//
// Too fast to see the loading message at all

export function FavoriteColors() {
  const colors = ["Blue", "Green", "Black"];

  const colorItems = colors.map((color, index) => {
    return <li key={index}>{color}</li>;
  });

  return (
    <div style={{ color: "blue" }}>
      <h3>My Favorite Colors</h3>

      <ul>{colorItems}</ul>
    </div>
  );
}
