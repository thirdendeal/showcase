// Main
// ---------------------------------------------------------------------

// Hello, World!
// ---------------------------------------------------------------------

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// ---------------------------------------------------------------------

// Render HTML
//
// React renders HTML to the web page via a container, and a function called createRoot()

// The Root Node
//
// The HTML element where you want to use as a container for content

const rootNode = document.getElementById("root"); // container

// ---------------------------------------------------------------------

// The createRoot Function
//
// Define the HTML element where a React component should be displayed

createRoot(rootNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
