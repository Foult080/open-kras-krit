import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoutes from "./components/routing";
import NavBar from "./components/layouts/NavBar";
import Landing from "./components/layouts/Landing";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
//events
import EventsAll from './components/event/eventsAll';
//employers
import Employers from './components/employer/employers';
//profiles
import Profile from './components/profile/profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <section className="contaier">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/events" component={EventsAll} />
              <PrivateRoutes exact path="/events-all" component={EventsAll} />
              <Route exaxt path="/employers" component={Employers} />
              <PrivateRoutes exact path="/profile" component={Profile} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
