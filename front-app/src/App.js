import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";
//import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

//import components
import NavBar from './components/layout/NavBar';
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/alert";
import Dashboard from "./components/layout/Dashboard";
import Ex404 from "./components/layout/Ex404";
//import PrivateRoute from "./components/privateRoute"

/*
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
*/

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <NavBar />
          <Alert />
          <section>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route component={Ex404} />
            </Switch>
          </section>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
