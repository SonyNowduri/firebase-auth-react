import { authFirebase } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getData } from "../storage/storeData";
import { baseApiPath, apiPaths, baseUrl } from "./apiConstants";

// FireBase Authentication
export const signInWithFireBase = async (email, password) => {
  let userDataRes = null;
  try {
    await signInWithEmailAndPassword(authFirebase, email, password)
      .then((userData) => {
        // console.log(userData)
        userDataRes = userData;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log(e);
  }
  return userDataRes;
};

// main Authentication verifis whether mail exits or not
export const requestApi = async (email, password) => {
  try {
    const url = "https://api-uat.tingisha.com/admin-services/api/preauth-check";
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email: email }),
    };
    const response = await fetch(url, options);
    const responseData = await response.json();
    return responseData;
  } catch (e) {
    console.log(e);
  }
};

// calling categories Api
export const getCategoriesList = async () => {
  const tokenDetails = await getData("accessToken");
  try {
    // console.log(accessToken)
    // const categoryUrl = "https://api-uat.tingisha.com/admin-services/api/categories"
    const categoryUrl = baseApiPath + apiPaths.CATEGORIES;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: tokenDetails,
      },
      method: "GET",
    };
    const categoryResponse = await fetch(categoryUrl, options);
    const categoryData = await categoryResponse.json();
    return categoryData;
  } catch (error) {
    console.log(error);
  }
};

// calling categories Item Api
export const getCategoryItemApi = async (id) => {
  const tokenDetails = await getData("accessToken");
  try {
    // console.log(accessToken) // /admin-services/api/categories/{categoryId}/services
    // console.log(id)
    // const categoryUrl =   `https://api-uat.tingisha.com/admin-services/api/categories/${id}`
    const categoryUrl = baseApiPath + apiPaths.CATEGORIES + id;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: tokenDetails,
      },
      method: "GET",
    };
    const categoryResponse = await fetch(categoryUrl, options);
    const categoryData = await categoryResponse.json();
    console.log(categoryData);
    return categoryData;
  } catch (error) {
    console.log(error);
  }
};

export const getServicesApi = async () => {
  const tokenDetails = await getData("accessToken");
  try {
    // console.log(accessToken)
    // const categoryUrl = "https://api-uat.tingisha.com/admin-services/api/categories"
    const servicesUrl = baseApiPath + apiPaths.SERVICES;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: tokenDetails,
      },
      method: "GET",
    };
    const servicesResponse = await fetch(servicesUrl, options);
    const servicesData = await servicesResponse.json();
    // console.log(servicesData)
    return servicesData;
  } catch (error) {
    console.log(error);
  }
};

// get all users API

export const getUsersApi = async () => {
  try {
    const usersUrl = baseUrl + apiPaths.USERS;

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    const usersResponse = await fetch(usersUrl, options);
    const usersData = await usersResponse.json();
    // console.log(usersData)
    return usersData.data;
  } catch (error) {
    console.log(error);
  }
};
// get user by id
export const getUsersByIdApi = async (id) => {
  try {
    const usersUrl = baseUrl + apiPaths.USERS + `${id}`;

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    };
    const usersResponse = await fetch(usersUrl, options);
    const usersData = await usersResponse.json();
    console.log(usersData);
    return usersData.data;
  } catch (error) {
    console.log(error);
  }
};

// put api
export const getUpdatedUserApi = async (id, data) => {
  try {
    const usersUrl = baseUrl + apiPaths.USERS + `${id}`;

    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer d039e345dc13024ae732c59ddf67243b17a52729d970d1431888ae2e8f7390cc ",
      },
      method: "PUT",
      body: JSON.stringify(data),
    };
    console.log(options);
    const usersResponse = await fetch(usersUrl, options);
    const usersData = await usersResponse.json();
    console.log(usersData);
    return usersData.data;
  } catch (error) {
    console.log(error);
  }
};

// post
export const creadtedUserApi = async (data) => {
  try {
    const usersUrl = baseUrl + apiPaths.USERS;

    // const data = {
    //   "name": "Sony",
    //   "email": "sony2@gmail.com",
    //   "gender": "Female",
    //   "status": "Active"
    // }
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer d039e345dc13024ae732c59ddf67243b17a52729d970d1431888ae2e8f7390cc ",
      },
      method: "POST",
      body: JSON.stringify(data),
    };
    console.log(options);
    const usersResponse = await fetch(usersUrl, options);
    const usersData = await usersResponse.json();
    console.log(usersData);
    return usersData.data;
  } catch (error) {
    console.log(error);
  }
};

// delete

export const deleteUserApi = async (id) => {
  try {
    const usersUrl = baseUrl + apiPaths.USERS + `${id}`;
    const options = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer d039e345dc13024ae732c59ddf67243b17a52729d970d1431888ae2e8f7390cc ",
      },
      method: "DELETE",
    };
    const usersResponse = await fetch(usersUrl, options);
    const usersData = await usersResponse.json();
    console.log(usersData);
    return usersData;
  } catch (error) {
    console.log(error);
  }
};
