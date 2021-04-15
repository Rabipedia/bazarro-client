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

function App() {
  return (
    <div>
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
          <Route path="/addProduct">
           <AddProduct/> 
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
