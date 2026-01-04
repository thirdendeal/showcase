// Context
// ---------------------------------------------------------------------

// Hooks
// ---------------------------------------------------------------------

// React Context is a way to manage state globally

import { useState, createContext, useContext } from "react";

// ---------------------------------------------------------------------

// Prop Drilling
//
// Pass state as "props" through each nested component

export function ByChainA() {
  const [user, _] = useState("Linus");

  return (
    <>
      <p>Component A (By Chain): {`Hello ${user}!`}</p>

      <ByChainB user={user} />
    </>
  );
}

// The Problem
//
// Even though ComponentB did not need the state, it had to pass it along

function ByChainB({ user }) {
  return (
    <>
      <p>Component B (By Chain)</p>

      <ByChainC user={user} />
    </>
  );
}

function ByChainC({ user }) {
  return <p>Component C (By Chain): {`Bye ${user}!`}</p>;
}

// ---------------------------------------------------------------------

// The Solution
//
// Use Context Provider's supplied state value throughout component trees

const UserContext = createContext();

export function ByContextA() {
  const [user, _] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <p>Component A (By Context): {`Hello ${user}!`}</p>

      <ByContextB />
    </UserContext.Provider>
  );
}

function ByContextB() {
  return (
    <>
      <p>Component B (By Context)</p>

      <ByContextC />
    </>
  );
}

function ByContextC() {
  return <p>Component C (By Context): {`Bye ${useContext(UserContext)}!`}</p>;
}
