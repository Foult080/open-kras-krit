import React, { Fragment, useState } from "react";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import balloon from "./balloon.png";

const Result = ({ ball, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isToggle: false,
  });

  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setAlert(`Hello ${email}`, "success");
  };

  const toggler = () => setFormData({ formData, isToggle: true });

  return ball && ball >= 3 ? (
    <Fragment>
      <div className="results">
        <span>
          <i className="fas fa-award medal"></i>
        </span>
        <h1 className="res-title">
          <i className="fas fa-star res-icon"></i>Поздравляем! Вы набрали:{ball}{" "}
          бал(-ов).
          <i className="fas fa-star res-icon"></i>
        </h1>
        <h3 className="res-good">
          Мы рекомендуем вам подать документы в наш колледж
          <i className="fas fa-user-graduate grad-icon"></i>
        </h3>
        <img className="results" alt="congratz" src={balloon} />
      </div>

      <div className="dpo">
        {formData.isToggle ? (
          <Fragment>
            <div className="auth ml-auto mx-auto auth">
              <form className="form-signin" onSubmit={(e) => onSubmit(e)}>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email address"
                  required
                  autoFocus
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                />
                <button
                  className="ml-auto mx-auto btn btn-primary btn-block"
                  type="submit"
                >
                  Завершить
                </button>
              </form>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <button
              className="ml-auto mx-auto btn btn-primary btn-block"
              onClick={toggler}
            >
              Завершить
            </button>
          </Fragment>
        )}
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="results2">
        <span>
          <i className="far fa-frown sad"></i>
        </span>
        <h1 className="res-bad">Сожалеем. Вы набрали:{ball} бал(-ов).</h1>
        <h3 className="res-bad">
          Мы рекомендуем вам выбрать другую специальность для поступления
        </h3>
      </div>
    </Fragment>
  );
};

Result.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Result);
