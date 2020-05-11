import React, { Fragment, useState } from "react";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendApplicant } from "../../actions/applicant";
import { useHistory } from "react-router-dom";
//import balloon from "./balloon.png";

const Result = ({ setAlert, ball, sendApplicant }) => {
  const [formData, setFormData] = useState({
    email: "",
    skills: "",
    agreed: null,
    isToggle: false,
  });
  let history = useHistory();

  const { email, agreed, skills } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (agreed) sendApplicant({ email, agreed, skills });
    else sendApplicant({ email, agreed });
    setAlert("Спасибо за участие!", "success");
    history.push("/");
  };

  return ball && ball >= 12 ? (
    <Fragment>
      <div className="results container">
        <span>
          <i className="fas fa-award medal"></i>
        </span>
        <h1 className="res-title">
          <i className="fas fa-star res-icon"></i>Поздравляем! Вы набрали:{ball}{" "}
          бал(-ов) из 15.
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
                    name="agreed"
                    value="true"
                    onClick={(e) => onChange(e)}
                  >
                    Да
                  </button>
                  <button
                    type="button"
                    className="ml-auto mx-auto btn btn-primary"
                    name="agreed"
                    value="false"
                    onClick={(e) => onChange(e)}
                  >
                    Нет
                  </button>
                </div>

                {formData.agreed === "true" ? (
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
                    <br />
                    <small>
                      *Нажимая кнопку Завершить, вы даете согласие на обработку
                      ваших данных.
                    </small>
                  </Fragment>
                ) : (
                  <Fragment>
                    {formData.agreed ? (
                      <Fragment>
                        <button
                          className="ml-auto mx-auto btn btn-primary btn-block"
                          type="submit"
                        >
                          Завершить
                        </button>
                        <br />
                        <small>
                          *Нажимая кнопку Завершить, вы даете согласие на
                          обработку ваших данных.
                        </small>
                      </Fragment>
                    ) : (
                      ""
                    )}
                  </Fragment>
                )}
                <br />
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
        <h1 className="res-bad">Сожалеем. Вы набрали:{ball} бал(-ов) из 15.</h1>
        <h3 className="res-bad">
          Мы рекомендуем вам выбрать другую специальность для поступления
        </h3>
      </div>
    </Fragment>
  );
};

Result.propTypes = {
  sendApplicant: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { sendApplicant, setAlert })(Result);
