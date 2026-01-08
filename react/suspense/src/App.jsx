// App
// ---------------------------------------------------------------------

// Suspense
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_suspense.asp

// Lets you display alternative HTML while waiting for code or data to load

import { Suspense, lazy } from "react";

import { FavoriteFruits, FavoriteColors } from "./Tasks.jsx";

// ---------------------------------------------------------------------

// Lazy Loading
//
// Import a component dynamically

const FavoriteCars = lazy(() => import("./LazyTasks.jsx"));

// ---------------------------------------------------------------------

function App() {
  return (
    <>
      <h1>Suspense</h1>

      <hr />

      <h2>A Very Fast Task</h2>

      <Suspense fallback={<div>Loading a very fast task...</div>}>
        <FavoriteColors />
      </Suspense>

      <h2>A Very Fast Task (Lazy Loaded)</h2>

      <Suspense fallback={<div>Lazy loading a very fast task...</div>}>
        <FavoriteCars />
      </Suspense>

      <h2>A Blocking Task</h2>

      <Suspense fallback={<div>Loading a blocking task...</div>}>
        <FavoriteFruits />
      </Suspense>

      <h2>A Very Fast Task & A Blocking Task</h2>
      <Suspense fallback={<div>Loading all tasks...</div>}>
        <FavoriteColors />
        <FavoriteFruits />
      </Suspense>
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
