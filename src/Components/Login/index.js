import React, { useState } from "react";
import Signup from "../Signup";
import { Link, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import app from '../../firebase';
import { signInWithFireBase } from "../../Services/authApi";
import { authFirebase } from '../../firebase'
import "bootstrap/dist/css/bootstrap.min.css";
import {signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { async } from "@firebase/util";
 

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "**Required";
  }
  if (!values.password) {
    errors.password = "**Required";
  } else if (values.password.length > 8) {
    errors.password = "**Must be 8 characters or less";
  }
  return errors;
};

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      
      // console.log(values, "onSUbmit");
      const {email, password} = values;
      // alert(JSON.stringify(email, password));
       
      setEmail(values.email);
      setPassword(values.password);
      login(values.email, values.password);
    },
  });

  const login = (email, password) => {
    // console.log(email, password);
    alert("Login Successfull");
    signInWithFireBase(email,password) 
  };

  // admin@tingisha.com
  // 12345678
  

  return (
    <div className="app-bg-container">
      <div className="login-container">
        <form onSubmit={formik.handleSubmit} className="login-card-container">
          <h1>Login</h1>

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

          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <Button className="mt-2 button" type="submit">
            Login
          </Button>
        </form>
        <p>
          Do you have an account? <Link to="/signup">Signup</Link> Here
        </p>
      </div>
    </div>
  );
}

export default withRouter(Login);
