import { authFirebase } from '../firebase'
import {signInWithEmailAndPassword } from "firebase/auth";
import { getData } from '../storage/storeData';
import { baseApiPath, apiPaths } from './apiConstants';


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
export const getCategoriesList = async () =>{
  const tokenDetails = await getData('accessToken') 
  try{
    // console.log(accessToken)
      // const categoryUrl = "https://api-uat.tingisha.com/admin-services/api/categories"
      const categoryUrl =    baseApiPath+apiPaths.CATEGORIES
      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: tokenDetails,
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
  


  // calling categories Item Api
export const getCategoryItemApi = async (id) =>{
  const tokenDetails = await getData('accessToken') 
  try{
    // console.log(accessToken) // /admin-services/api/categories/{categoryId}/services
    // console.log(id)
      // const categoryUrl =   `https://api-uat.tingisha.com/admin-services/api/categories/${id}`
      const categoryUrl =    baseApiPath+apiPaths.CATEGORIES + id 
      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: tokenDetails,
        },
        method: "GET",
      
      }
      const categoryResponse = await fetch(categoryUrl,options)
      const categoryData = await categoryResponse.json() 
      console.log(categoryData)
      return categoryData
      
  }
  catch(error){
      console.log(error)
  }

}
  


export const getServicesApi = async () => {
  const tokenDetails = await getData('accessToken') 
  try{
    // console.log(accessToken)
      // const categoryUrl = "https://api-uat.tingisha.com/admin-services/api/categories"
      const servicesUrl =    baseApiPath+apiPaths.SERVICES
      const options = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: tokenDetails,
        },
        method: "GET",
      
      }
      const servicesResponse = await fetch(servicesUrl,options)
      const servicesData = await servicesResponse.json() 
      // console.log(servicesData)
      return servicesData
      
  }
  catch(error){
      console.log(error)
  }
}
