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
//employers
import EmpLanding from "./components/Employers/EmpLanding";
import EditProfileForm from "./components/Employers/EditProfileForm";
import AddExperience from "./components/Employers/AddExperience";
import Employer from "./components/Employers/Employer";
import EditEmpProfile from "./components/Employers/EditEmpProfile";
import AddVacancy from "./components/Employers/AddVacancy";
//wsr
import WsrLanding from "./components/Layout/WsrLanding";
//news
import News from "./components/News/News";
import NewsEl from "./components/News/NewEl";


import PrivateRoute from "./components/privateRoute";
//import SendApp from "./components/applicant/SendApp";
//import PrivateRoute from "./components/privateRoute"

/*
if (localStorage.token) {
  setAuthToken(localStorage.token);
  dispatch(loadUser());
}
*/

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
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
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/employers" component={EmpLanding} />
              <PrivateRoute exact path="/profile/create-profile" component={EditProfileForm} />
              <PrivateRoute exact path="/profile/edit-profile" component={EditProfileForm} />
              <PrivateRoute exact path="/profile/add-experience" component={AddExperience} />
              <PrivateRoute exact path="/employers/:id" component={Employer} />
              <PrivateRoute exact path="/employer/create-profile" component={EditEmpProfile} />
              <PrivateRoute exact path="/employer/edit-profile" component={EditEmpProfile} />
              <PrivateRoute exact path="/employer/add-vacancy" component={AddVacancy} />
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
