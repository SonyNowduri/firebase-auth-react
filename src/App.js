import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Categories from './Components/Categories'

// import { AuthContext, AuthProvider } from './contexts/AuthContext'
// import PrivateRoute from './PrivateRoute'
import './App.css'

const App = () => (
 
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Categories} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    </Switch>
    </BrowserRouter>
   
)
export default App
