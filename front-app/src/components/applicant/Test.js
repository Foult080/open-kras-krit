import React, { Fragment, useEffect, useState } from "react";
import Spinner from ".././layout/spinner";
//import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTest } from "../../actions/applicant";
import { setAlert } from "../../actions/alert";
import Result from "./Result";
//import Result from './Result';
//import TestItem from "./TestItem";

const Test = ({ setAlert, getTest, test: { loading, test } }) => {
  useEffect(() => {
    getTest();
  }, [getTest]);

  const [data, setData] = useState();
  const [submit, setSubmit] = useState({
    isSubmit: false,
    ball: 0,
  });

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    var balls = 0;
    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        let quest = test.find((item) => item._id === key);
        let answer = quest.answers.find((el) => el.answer === true);
        if (answer._id === value) balls++;
      });
      setSubmit({ submit, isSubmit: true, ball: balls });
      console.log(balls);
    } else setAlert("Решите тест!", "danger");
  };

  return loading ? (
    <Spinner className="spinner" />
  ) : (
    <Fragment>
      <div className="container">
        <h4 className="my-4 card-title">Тестирование на профпригодность</h4>
        <hr />

        {submit.isSubmit ? (
          <Fragment>
            <Result ball={submit.ball} />
          </Fragment>
        ) : (
          <Fragment>
            <div className="ml-auto mx-auto">
              <form className="form-signin" onSubmit={(e) => onSubmit(e)}>
                {test.map((item) => (
                  <div className="shit" key={item._id}>
                    <h5>{item.question}</h5>
                    {item.answers.map((el) => (
                      <div className="form-check" key={el._id}>
                        <input
                          className="form-check-input"
                          type="radio"
                          name={item._id}
                          value={el._id}
                          data={el.vars}
                          onChange={(e) => onChange(e)}
                        />
                        <label className="form-check-label">{el.vars}</label>
                      </div>
                    ))}
                    <hr />
                  </div>
                ))}

                <button
                  className="ml-auto mx-auto btn btn-primary btn-block"
                  type="submit"
                >
                  Продолжить
                </button>
              </form>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Test.propTypes = {
  getTest: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  test: state.test,
});

export default connect(mapStateToProps, { getTest, setAlert })(Test);
