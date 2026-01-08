// App
// ---------------------------------------------------------------------

// React Router
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_router.asp

// Routing
//
// - Create multiple pages in your single-page application
// - Handle URL parameters and query strings
// - Manage browser history and navigation
// - Create nested routes and layouts
// - Implement protected routes for authentication

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import * as Views from "./Views.jsx";

// ---------------------------------------------------------------------

// Style Active Links
//
// NavLink knows whether the link's URL is "active" or not

const navLink = ({ isActive }) => ({
  color: isActive ? "#007bff" : "#333",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px",
});

// ---------------------------------------------------------------------

// Nested Routes
//
// Change only parts of the page when you navigate to a new URL

// URL Parameters
//
// Variables in your URL, often used to pass data between components

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink style={navLink} to="/">
          Home
        </NavLink>
        <NavLink style={navLink} to="/about">
          About
        </NavLink>
        <NavLink style={navLink} to="/contact">
          Contact
        </NavLink>
        <NavLink style={navLink} to="/products">
          Products
        </NavLink>

        <br />
        <br />

        <NavLink style={navLink} to="/customer/Emil">
          Emil
        </NavLink>
        <NavLink style={navLink} to="/customer/Tobias">
          Tobias
        </NavLink>
        <NavLink style={navLink} to="/customer/Linus">
          Linus
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Views.Home />} />
        <Route path="/about" element={<Views.About />} />
        <Route path="/contact" element={<Views.Contact />} />

        <Route path="/products" element={<Views.Products />}>
          <Route path="car" element={<Views.CarProducts />} />
          <Route path="bike" element={<Views.BikeProducts />} />
        </Route>

        <Route path="/customer/:firstname" element={<Views.Customer />} />
      </Routes>
    </BrowserRouter>
  );
}
// ---------------------------------------------------------------------

export default App;
