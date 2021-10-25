// import React, { useContext } from "react";
// import { Route, Redirect} from 'react-router-dom'
// import { AuthContext } from "../contexts/AuthContext";

// const PrivateRoute  = ({component:RouteComponent, ...rest}) => {
//     const {currentUser} = useContext(AuthContext)
//     return(
//         <Route
//         {...rest}
//         render = {routeProps =>
//         !!currentUser ? (<RouteComponent {...routeProps} /> ) : (<Redirect to={"/login"} />)
//     }
//     />
//     )
// }

// export default PrivateRoute
// import Cookies from 'js-cookie'
import { Redirect, Route } from "react-router-dom";
import { getData } from "../../storage/storeData";
// import Home from '../Home'

const ProtectedRoute = async (props) => {
  const tokenDetails = await getData("accessToken");
  console.log(tokenDetails);
  if (tokenDetails === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
