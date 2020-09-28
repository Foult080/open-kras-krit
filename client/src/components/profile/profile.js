import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layouts/spinner";
//import DashboardActions from './dashboardActions';

const Profile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="profile col-md-8 col-lg-8 mx-auto">
        <h1 className="large text-primary profile-header">Профиль</h1>
        <p className="lead">
          <i className="fas fa-user"></i>
           Профиль пользователя {user !== null ? user.email : "null"}
        </p>
        {profile !== null ? (
          <Fragment>
            <h1>Информация о профиле</h1>
          </Fragment>
        ) : (
          <Fragment>
            <p>Вы еще не создали профиль</p>
            <Link to="/create-profile" className="btn btn-primary">
              Создать профиль
            </Link>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
