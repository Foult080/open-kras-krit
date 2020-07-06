import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";

const Register = ({ setAlert, register, isAuth }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    role: "student",
  });

  const { name, email, password, password2, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Пароли не совпадают", "danger");
    } else {
      register({ name, email, password, role });
    }
  };

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <div className="container col-lg-4 col-md-4 col-sm-4">
        <div className="auth ml-auto mx-auto">
          <form className="form-signin" onSubmit={(e) => onSubmit(e)}>
            <h1 className="h3 mb-3 font-weight-normal">Регистрация</h1>
            <hr />
            <input
              type="text"
              className="form-control"
              placeholder="Ваше имя"
              name="name"
              required
              value={name}
              onChange={(e) => onChange(e)}
            />
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email адрес"
              required
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Укажите пароль"
              required
              minLength="8"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              id="inputPassword2"
              className="form-control"
              placeholder="Повторите пароль"
              required
              name="password2"
              minLength="8"
              value={password2}
              onChange={(e) => onChange(e)}
            />
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="role"
              value={role}
              onChange={(e) => onChange(e)}
            >
              <option value="student">Студент</option>
              <option value="employer">Работодатель</option>
            </select>
            <small className="form-text">
              Этот сайт использует Gravatar для изображений профиля.
            </small>

            <button
              className="ml-auto mt-2 btn btn-lg btn-primary"
              type="submit"
            >
              Продолжить
            </button>
            <small className="form-text">
              Нажимая на кнопку вы даёте согласие, на обработку персональных
              данных и соглашаетесь с{" "}
              <a href="/privacy">политикой конфиденциальности</a>
            </small>
            <p className="mb-3 mt-2 text-muted">
              Уже есть аккаунт? <Link to="/signin">Войдите</Link>
            </p>
            <p className="mb-3 text-muted">&copy; 2020</p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
