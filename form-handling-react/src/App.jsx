import React from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";  // Ensure correct path
import FormikForm from "./components/FormikForm";  // Ensure correct path

function App() {
  return (
    <div>
      <h1>User Registration (Controlled Components)</h1>
      <RegistrationForm />

      <h1>User Registration (Formik)</h1>
      <FormikForm />
    </div>
  );
}

export default App;
