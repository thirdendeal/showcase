// Views
// ---------------------------------------------------------------------

// React Router
// ---------------------------------------------------------------------

import { NavLink, Outlet, useParams } from "react-router-dom";

// ---------------------------------------------------------------------

export function Home() {
  return <h1>Home Page</h1>;
}

export function About() {
  return <h1>About Page</h1>;
}

export function Contact() {
  return <h1>Contact Page</h1>;
}

// ---------------------------------------------------------------------

// Outlet
//
// Specifies where to render nested <Route /> content

export function Products() {
  const navLink = ({ isActive }) => ({
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
  });

  return (
    <div>
      <h1>Products Page</h1>

      <nav style={{ marginBottom: "20px" }}>
        <NavLink style={navLink} to="/products/car">
          Cars
        </NavLink>
        <NavLink style={navLink} to="/products/bike">
          Bikes
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>

      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

export function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>

      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------

// The useParams Hook
//
// Used to access URL parameters named by <Route />

export function Customer() {
  const { firstname } = useParams();

  const tryJohn = firstname === "John" ? "" : <p>Try "/customer/John"</p>;

  return (
    <>
      <h1>Hello, {firstname}!</h1>

      <p>You can use any name in the URL</p>
      {tryJohn}
    </>
  );
}
