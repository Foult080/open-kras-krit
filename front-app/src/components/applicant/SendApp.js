import React, { Fragment, useState } from "react";
import Spinner from ".././layout/spinner";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import setAlert from "../layout/alert";

const SendApp = ({ auth: { user, loading, isAuth } }) => {
  //create state
  const [formData, setFormdata] = useState({
    tel: "",
    spec1: "",
    spec2: "",
    ball: "",
    agreed: ""
  });

  //check if auth
  if (!isAuth && !loading) {
    return <Redirect to="/signin" />;
  }

  const { tel, spec1, spec2, ball, agreed } = formData;

  const onChange = e =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDegault();
    console.log(formData);
  };

  return loading && user === null ? (
    <div className="spinner">
      <Spinner />
    </div>
  ) : (
    <Fragment>
      <div className="container">
        <h3 className="header-info blue-header">
          <i className="fas fa-portrait"></i>Подать заявление
        </h3>
        <hr />
        <div className="form-send">
          <form>
            <div className="form-group">
              <label for="еуд">Контактный телефон</label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Контактный телефон"
                required
                autoFocus
              />
              <small id="emailHelp" className="form-text text-muted">
                укажите в формате 11 символов
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

SendApp.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SendApp);
