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

  return loading && user === null ? (
    <div className="spinner">
      <Spinner />
    </div>
  ) : (
    <Fragment>
      <div className="container container2">
        <h4 className="header-info">Подать заявление</h4>
        <hr />
        <p> Hello {user.name}</p>
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
