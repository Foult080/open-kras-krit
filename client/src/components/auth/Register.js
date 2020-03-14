import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';

const Register = ({ setAlert, register, isAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: ""
  });

  const { email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Пароли не совпадают', 'danger');
    } else {
      register({email,password});
    }
  };

  if (isAuth) {
    return <Redirect to="/events" />
  }

  return (
    <Fragment>
      <div className="body-login">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
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
            placeholder="Enter password"
            required
            minLength="8"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          />
          <input
            type="password"
            id="inputPassword2"
            className="form-control"
            placeholder="Repeat password"
            required
            name="password2"
            minLength="8"
            value={password2}
            onChange={e => onChange(e)}
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Продолжить
          </button>
          <p className="mb-3 text-muted"> Уже есть аккаунт? <Link to="/login">Войдите</Link></p>
          <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
        </form>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {setAlert, register})(Register);
