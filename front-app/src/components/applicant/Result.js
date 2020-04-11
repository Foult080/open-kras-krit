import React, { Fragment, useState } from "react";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import balloon from "./balloon.png";

const Result = ({ ball, setAlert }) => {
  const [formData, setFormData] = useState({
    email: "",
    skills: "",
    isToggle: false,
    toggle2: null,
  });

  const { email, skills } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setAlert(`Hello ${email}`, "success");
  };

  //const toggler = () => setFormData({ ...formData, isToggle: true });

  return ball && ball >= 0 ? (
    <Fragment>
      <div className="results container">
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
        {/**
        <img className="results" alt="congratz" src={balloon} />
         */}
      </div>

      <div className="dpo">
        {formData.isToggle ? (
          <Fragment>
            <div className="auth ml-auto mx-auto">
              <h4 className="my-4 card-title">
                Оставьте немного информации о вас
              </h4>
              <hr />
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
                <h6 className="my-4 card-title">
                  Хотели бы принять участие в программе дополнительго
                  профессионального образования?
                </h6>
                <div
                  className="btn-group res-but"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="ml-auto mx-auto btn btn-primary"
                    name="toggle2"
                    value="true"
                    onClick={(e) => onChange(e)}
                  >
                    Да
                  </button>
                  <button
                    type="button"
                    className="ml-auto mx-auto btn btn-primary"
                    name="toggle2"
                    value="false"
                    onClick={(e) => onChange(e)}
                  >
                    Нет
                  </button>
                </div>

                {formData.toggle2 === "true" ? (
                  <Fragment>
                    <h6 className="my-4 card-title">
                      Какие направления или технологии вы бы хотели изучать?
                    </h6>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="skills"
                      value={skills}
                      onChange={(e) => onChange(e)}
                    />
                    <button
                      className="ml-auto mx-auto btn btn-primary btn-block"
                      type="submit"
                    >
                      Завершить
                    </button>
                  </Fragment>
                ) : (
                  <Fragment>
                    {formData.toggle2 ? (
                      <Fragment>
                        <button
                          className="ml-auto mx-auto btn btn-primary btn-block"
                          type="submit"
                        >
                          Завершить
                        </button>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </Fragment>
                )}
              </form>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <button
              className="ml-auto mx-auto btn btn-primary btn-block"
              name="isToggle"
              value="true"
              onClick={(e) => onChange(e)}
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