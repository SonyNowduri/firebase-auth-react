import React, { useEffect, useState } from "react";
import { Link, withRouter ,useHistory} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { ErrorMessage, useFormik } from "formik";
// import app from '../../firebase';
import {requestApi,errorMessageValue,signInWithFireBase} from "../../Services/authApi";
// import { authFirebase } from '../../firebase'
import "bootstrap/dist/css/bootstrap.min.css";
// import {signInWithEmailAndPassword } from "firebase/auth";
import "./index.css";
import { storeData } from "../../storage/storeData";

 
// validations 
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

export let accessTokenId = ""
console.log(accessTokenId)

// react functional component
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory()

  let errorMsg = ""
  // formik validations
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      errorMessage: ""
    },
    validate,
    onSubmit: (values) => {
      const {email, password} = values;       
      setEmail(values.email);
      setPassword(values.password);
      // setErrorMessage(errorMessageValue)
      login(values.email, values.password);
    },
  });
  
  // on click login
  const login = (email, password) => {
      requestApi(email,password)
      .then((res) => {
      // console.log(res)
      if(res.data?.status === "ACTIVE" ){
          signInWithFireBase(email,password)
          .then((fbRes) => {
            console.log(fbRes)
            let token = fbRes.user
            const {accessToken} = token
            // console.log(accessToken)
            storeData("accessToken", accessToken)
            console.log(storeData("accessToken", accessToken))
            if(fbRes !== null){
              history.push("/")
             
            }else{
              // console.log("Sony")
              setErrorMessage("Invalid Credentials, Please contact administartor")
            }
          }).catch((e) => {
            // console.log(e)
          })
      }
      if(res.statusCode === 400){
         errorMsg = res.message
          setErrorMessage(errorMsg)
          
      }
      })
      .catch((e) => {
      console.log(e)
      
      })
  };


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

          {errorMessage ? (<p className = "error">{errorMessage}</p>) : null}

          <Button className="mt-2 button" type="submit" >
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



