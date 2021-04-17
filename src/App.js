import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageProduct from './components/ManageProduct/ManageProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Checkout from './components/Checkout/Checkout';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path='/checkout/:id'>
            <Checkout/>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
           <AddProduct/> 
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <ManageProduct/>
          </PrivateRoute>
          <PrivateRoute path="/editProducts">
            <EditProduct/>
          </PrivateRoute>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
