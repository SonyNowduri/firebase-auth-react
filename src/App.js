import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Categories from './Components/Categories'
// import Header from './Components/Header'
import CategoryBody from './Components/CategoryBody'
import ServicesCom from './Components/ServicesCom'
import ProtectedRoute from './Components/ProtectedRoute'
import Post from './Components/Home/Post'
import Put from './Components/Home/Put'
import Delete from './Components/Home/Delete';

import 'antd/dist/antd.css';

// import { AuthContext, AuthProvider } from './contexts/AuthContext'
// import PrivateRoute from './PrivateRoute'
import './App.css'

const App = () => (
 
  // <BrowserRouter>
  
    // <Switch>
    // {/* <Route exact path="/login" component={Login} /> */}
    // {/* <Route exact path="/" component={Home} /> */}
    // {/* <Route exact path="/categories" component={Categories} />
    // <Route exact path= "/categories/:id" component={CategoryBody} />
    // <Route exact path= "/services" component={ServicesCom} />
    // <Route exact path="/signup" component={Signup} /> */}
    // // </Switch>
    // </BrowserRouter>

    <BrowserRouter>
  
    <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Post} />
    <Route exact path="/update" component={Put} />
    <Route exact path="/delete" component={Delete} />
    </Switch>
    </BrowserRouter>

   
)
export default App
