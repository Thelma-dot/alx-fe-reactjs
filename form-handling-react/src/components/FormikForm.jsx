import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form submitted:", values);
        setTimeout(() => {
          alert("Form submitted successfully!");
          resetForm(); // Reset form after submission
          setSubmitting(false);
        }, 1000); // Simulate a network request delay
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" autoComplete="off" />
            <ErrorMessage name="username" component="p" className="error-message" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" autoComplete="off" />
            <ErrorMessage name="email" component="p" className="error-message" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" autoComplete="off" />
            <ErrorMessage name="password" component="p" className="error-message" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
