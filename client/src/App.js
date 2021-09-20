import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

//Redux
import { useSelector } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const isAuth = useSelector(({ auth }) => auth.isAuthenticated);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            //Protected Route
            <Route
              path='/dashboard'
              render={() => (isAuth ? <Dashboard /> : <Redirect to='/login' />)}
            />
            <Route
              path='/create-profile'
              render={() =>
                isAuth ? <CreateProfile /> : <Redirect to='/login' />
              }
            />
            <Route
              path='/edit-profile'
              render={() =>
                isAuth ? <EditProfile /> : <Redirect to='/login' />
              }
            />
            <Route
              path='/add-experience'
              render={() =>
                isAuth ? <AddExperience /> : <Redirect to='/login' />
              }
            />
            <Route
              path='/add-education'
              render={() =>
                isAuth ? <AddEducation /> : <Redirect to='/login' />
              }
            />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
