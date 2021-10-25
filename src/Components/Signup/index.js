// import { Formik } from 'formik'
import { useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import "./index.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "**Required";
  }
  if (!values.email) {
    errors.email = "**Required";
  }
  if (!values.password) {
    errors.password = "**Required";
  }
  if (!values.dob) {
    errors.dob = "**Required";
  }
  return errors;
};

function Signup(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values, "onSUbmit");
      setName(values.name);
      setEmail(values.email);
      setDob(values.dob);
      setPassword(values.password);
      signup(values.name, values.password, values.email, values.dob);
    },
  });

  const signup = (name, password) => {
    alert("Register Successfull");
  };

  return (
    <div className="app-bg-container">
      <div className="signup-container">
        <h3>Signup</h3>
        <form className="signup-card-container" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="dob">DoB:</label>
          <input
            type="date"
            id="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
          />
          {formik.errors.dob ? (
            <div className="error">{formik.errors.dob}</div>
          ) : null}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" />

          <Button className="mt-2 button" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
