import React, { Fragment, useEffect, useState } from "react";
import Spinner from ".././layout/spinner";
//import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTest } from "../../actions/applicant";
import { setAlert } from "../../actions/alert";

const Test = ({ setAlert, getTest, test: { loading, test } }) => {
  useEffect(() => {
    getTest();
  }, [getTest]);

  const [data, setData] = useState();

  const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(data);
    setAlert("Hello Motherfucker", "info");
    console.log(data.exampleRadios);
    if (data.exampleRadios === "option1" && data.exampleRadios2 === "option4")
      setAlert("Fine", "success");
    else setAlert("BAD", "danger");
  };

  return loading ? (
    <Spinner className="spinner" />
  ) : (
    <Fragment>
      <div className="container">
        <h4 className="my-4 card-title">Тестирование на профпригодность</h4>
        <hr />
        <div className="ml-auto mx-auto">
          <form className="form-signin" onSubmit={e => onSubmit(e)}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                onChange={e => onChange(e)}
              />
              <label className="form-check-label">Default radio</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                onChange={e => onChange(e)}
              />
              <label className="form-check-label">Default radio 2</label>
            </div>

            <hr />

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios2"
                id="exampleRadios"
                value="option4"
                onChange={e => onChange(e)}
              />
              <label className="form-check-label">Default radio 2</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios2"
                id="exampleRadios"
                value="option6"
                onChange={e => onChange(e)}
              />
              <label className="form-check-label">Default radio 2</label>
            </div>

            <button
              className="ml-auto mx-auto btn btn-primary btn-block"
              type="submit"
            >
              Продолжить
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Test.propTypes = {
  getTest: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  test: state.test
});

export default connect(mapStateToProps, { getTest, setAlert })(Test);
