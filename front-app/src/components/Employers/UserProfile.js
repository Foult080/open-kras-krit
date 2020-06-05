import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getProfile } from "../../actions/profiles";
import { Link } from "react-router-dom";

const UserProfile = ({ getProfile, profiles: { profile, loading } }) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);


  return loading ? (
    <Spinner />
  ) : profile === null ? (
    <Fragment>
      <div className="container profile-user">
        <h4>У вас пока еще нет профиля!</h4>
        <Link to="/profile/create-profile" className="btn btn-primary">
          Создать профиль
          <i className="far fa-address-card profile-icon"></i>
        </Link>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container profile-user">
        <h4>У вас есть профиль!</h4>
        <Link to="/profile/create-profile" className="btn btn-primary">
          Редактировать профиль
          <i className="far fa-address-card profile-icon"></i>
        </Link>
      </div>
    </Fragment>
  );
};

UserProfile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(MapStateToProps, { getProfile })(UserProfile);
