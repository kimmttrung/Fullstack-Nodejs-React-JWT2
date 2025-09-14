
import './App.scss';
import Login from './components/Login/Login';
// import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <div className='app-container'>
        <Switch>
          <Route path="/about">
            about me
          </Route>
          <Route path="/users">
            usser
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/home">
            home
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
