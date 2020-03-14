import React, { Fragment, useState } from "react";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login, isAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  //redirect if logged in
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="auth ml-auto mx-auto auth">
          <form className="form-signin" onSubmit={e => onSubmit(e)}>
            <h1 className="h3 mb-3 font-weight-normal">Войти</h1>

            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              name="email"
              value={email}
              onChange={e => onChange(e)}
            />

            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
            <button
              className="ml-auto mx-auto btn btn-lg btn-primary btn-block"
              type="submit"
            >
              Войти
            </button>
            <p className="mb-3 text-muted">
              Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
            </p>
            <p className="mb-3 text-muted">&copy; 2020</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  isAuth: PropTypes.bool,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
