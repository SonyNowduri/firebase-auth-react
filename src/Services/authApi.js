import app from "../firebase";
import React from 'react'
import { useEffect } from "react";
import { authFirebase } from '../firebase'
import {signInWithEmailAndPassword } from "firebase/auth";


export const signInWithFireBase = async(email,password) =>{
  // https://api-uat.tingisha.com/admin-services/api/preauth-check   

  try{
     await signInWithEmailAndPassword(authFirebase,email,password)
    .then((userData) => {
      // signed in
     alert(`User ${email} already exists`);
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.errorMessage
      alert("User does not exist")
      console.log(errorMessage)
    });
  }
  catch(e){
    console.log(e)
  }
}



  
  

  
  
  

