
import './App.scss';
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './components/ManageUsers/Users';
import { useEffect, useState } from 'react';
import _ from 'lodash';

function App() {
  const [account, setAccount] = useState({});
  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);
  return (
    <Router>
      {account && !_.isEmpty(account) && account.isAuthenticated && <Nav />}

      <div className='app-container'>
        <Switch>
          <Route path="/about">
            about me
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
          <Route path="/users">
            <Users />
          </Route>
          <Route path="*">
            404 not found
          </Route>
        </Switch>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>

  );
}

export default App;
