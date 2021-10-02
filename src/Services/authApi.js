import { authFirebase } from '../firebase'
import {signInWithEmailAndPassword } from "firebase/auth";


// FireBase Authentication
export const signInWithFireBase = async(email,password) =>{
  let userDataRes = null
  try{
     await signInWithEmailAndPassword(authFirebase,email,password)
    .then((userData) => {
      // console.log(userData)
      userDataRes = userData
     
    })
    .catch((error) => {
      console.log(error)
    });
  }
  catch(e){
    console.log(e)
  }
  return userDataRes
 
}


// main Authentication verifis whether mail exits or not 
export const requestApi = async(email,password) => {
  try{
  
  const url="https://api-uat.tingisha.com/admin-services/api/preauth-check"
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      },
    method: "POST",
    body: JSON.stringify({email:email})
  }
  const response = await fetch(url,options)
  const responseData = await response.json() 
  return responseData
  }
  catch(e){
   console.log(e)
  
  }
}



// calling categories Api
export const getCategoriesList = async (accessToken) =>{

  try{
    // console.log(accessToken)
      const categoryUrl = "https://api-uat.tingisha.com/admin-services/api/categories"
      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        method: "GET",
      
      }
      const categoryResponse = await fetch(categoryUrl,options)
      const categoryData = await categoryResponse.json() 
      return categoryData
      
  }
  catch(error){
      console.log(error)
  }

}
  

  
  
  
