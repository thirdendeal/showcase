// App
// ---------------------------------------------------------------------

// Forms
// ---------------------------------------------------------------------
//
// https://www.w3schools.com/react/react_forms.asp

import * as Forms from "./Forms.jsx";

// ---------------------------------------------------------------------

function App() {
  return (
    <>
      <h1>All Forms</h1>

      <h2>Regular HTML Form</h2>
      <Forms.RegularForm />
      <h2>Form</h2>
      <Forms.Form />
      <h2>Submittable Form</h2>
      <Forms.SubmittableForm />
      <h2>Textarea</h2>
      <Forms.Textarea />
      <h2>Select</h2>
      <Forms.Select />
      <h2>Multiple Inputs Form</h2>
      <Forms.MultipleInputsForm />
      <h2>Multiple Input Types Submittable Form</h2>
      <Forms.MultipleInputTypesSubmittableForm />
      <h2>Radio Submittable Form</h2>
      <Forms.RadioSubmittableForm />
    </>
  );
}

// ---------------------------------------------------------------------

export default App;
