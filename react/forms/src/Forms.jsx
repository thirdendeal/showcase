// Forms
// ---------------------------------------------------------------------

// HTML Forms vs. React Forms
//
// In standard HTML, form elements maintain their own value based on user input
// In React, the value of the form element is managed through component state

import { useState } from "react";

// ---------------------------------------------------------------------

// Regular Form
//
// This will work as normal, the form will submit and the page will refresh
// But this is generally not what we want to happen in React
// We want to prevent this default behavior and let React control the form

export function RegularForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}

// ---------------------------------------------------------------------

// Controlled Components
//
// React components that keep the value of form elements in its state property

// The useState Hook
//
// Returns a state variable and its update function, with its argument as the initial value
//
// const [dayOfTheWeek, setDayOfTheWeek] = useState("Monday");

export function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // update `name` by calling `setName` with its new value
  };

  return (
    <form>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>

      <p>Current value: {name}</p>
    </form>
  );
}

// ---------------------------------------------------------------------

// Submitting Forms
//
// You can control the submit action by adding an onSubmit event handler

export function SubmittableForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>

      <input type="submit" />
    </form>
  );
}

// ---------------------------------------------------------------------

// Textarea
//
// In HTML the value of a textarea is the text between its start and end tags
// In React the value of a textarea is placed in a value attribute

export function Textarea() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // React uses the value attribute to control the textarea

  return (
    <form>
      <label>
        Write here:
        <textarea value={text} onChange={handleChange} />
      </label>

      <p>Current value: {text}</p>
    </form>
  );
}

// ---------------------------------------------------------------------

// Select
//
// In HTML, the selected value in the drop down list is defined with the selected attribute
// In React, the selected value is defined with a value attribute on the select tag

export function Select() {
  const [brand, setBrand] = useState("Volvo");

  const handleChange = (event) => {
    setBrand(event.target.value);
  };

  return (
    <form>
      <select value={brand} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

// ---------------------------------------------------------------------

// Handling Multiple Inputs
//
// 1. Using a separate useState call for each input
// 2. Using a single useState call with an object to hold all form field values
//
// The second approach is more common for forms

export function MultipleInputsForm() {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setForm((object) => {
      return { ...object, [name]: value }; // copy current form object and override name
    });
  };

  return (
    <form>
      <label>
        First name:
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
      </label>

      <p>
        Current values: {form.firstname} {form.lastname}
      </p>
    </form>
  );
}

// ---------------------------------------------------------------------

// Checkbox
//
// For checkboxes, use the checked attribute instead of value

export function MultipleInputTypesSubmittableForm() {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setForm((object) => {
      return { ...object, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let fillings = "";

    if (form.tomato) fillings += "tomato";
    if (form.onion) fillings += form.tomato ? " and onions" : "onions";

    alert(`${form.firstname} wants a burger with ${fillings || "nothin'?"}`); // Hey, Jimmy!
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        My name is:
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
      </label>

      <p>I want a burger with:</p>

      <label>
        Tomato:
        <input
          type="checkbox"
          name="tomato"
          checked={form.tomato}
          onChange={handleChange}
        />
      </label>
      <label>
        Onion:
        <input
          type="checkbox"
          name="onion"
          checked={form.onion}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

// ---------------------------------------------------------------------

// Radio
//
// Control based on whether the radio button's value matches the selected value in your state

export function RadioSubmittableForm() {
  const [selectedFruit, setSelectedFruit] = useState("banana");

  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Your favorite fruit is: ${selectedFruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Select your favorite fruit:</p>

      <label>
        <input
          type="radio"
          name="fruit"
          value="apple"
          checked={selectedFruit === "apple"}
          onChange={handleChange}
        />
        Apple
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="banana"
          checked={selectedFruit === "banana"}
          onChange={handleChange}
        />
        Banana
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="fruit"
          value="cherry"
          checked={selectedFruit === "cherry"}
          onChange={handleChange}
        />
        Cherry
      </label>

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
