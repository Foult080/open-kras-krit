import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

//import components

//layouts
import NavBar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import Alert from "./components/Layout/alert";
import Dashboard from "./components/Layout/Dashboard";
import Ex404 from "./components/Layout/Ex404";
import ContactForm from "./components/Layout/ContactForm";
//auth
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
//applicants
import Test from "./components/Applicant/Test"
import AppLanding from "./components/Applicant/AppLanding";
//emploers
import EmpLanding from "./components/Employers/EmpLanding";
//wsr
import WsrLanding from "./components/Layout/WsrLanding";
//news
import News from "./components/News/News";
import NewsEl from "./components/News/NewEl";
//import SendApp from "./components/applicant/SendApp";
//import PrivateRoute from "./components/privateRoute"


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
          <section className="wrapper">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/employee" component={EmpLanding} />
              <Route exact path="/wsr" component={WsrLanding} />
              <Route exact path="/applicant" component={AppLanding} />
              <Route exact path="/applicant/test" component={Test} /> 
              <Route exact path="/contact-form" component={ContactForm} />
              <Route exact path="/news" component={News} />
              <Route exact path="/news/:id" component={NewsEl} />
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
