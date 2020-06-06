import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getProfile, deleteExp } from "../../actions/profiles";
import { Link } from "react-router-dom";

const UserProfile = ({
  getProfile,
  deleteExp,
  profiles: { profile, loading },
  history,
}) => {
  useEffect(() => {
    getProfile(history);
  }, [getProfile, history]);

  return loading ? (
    <Spinner />
  ) : profile === null ? (
    <Fragment>
      <div className="container profile-user">
        <h4>У вас пока еще нет профиля!</h4>
        <Link to="/profile/create-profile" className="btn btn-danger">
          Создать профиль
          <i className="far fa-address-card profile-icon"></i>
        </Link>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container">
        <h4 className="profile-user">Анкета пользователя:</h4>
        <div className="form-div col-lg-10 col-md-8 col-sm-6 mx-auto ml-auto">
          <hr />
          <form className="form">
            <p>
              <strong>Имя пользоватля: </strong>
              {profile.user.name}
            </p>
            <p>
              <strong>email: </strong>
              {profile.user.email}
            </p>
            <p>
              <strong>Телефон: </strong>
              {profile.tel}
            </p>
            <p>
              <strong>Профиль на GitHub: </strong>
              {profile.github}
            </p>
            <p>
              <strong>Специальность: </strong>
              {profile.spec}
            </p>
            <p>
              <strong>Статус: </strong>
              {profile.status}
            </p>
            <p>
              <strong>Навыки: </strong>
              {profile.skills.map((item) => (
                <span className="tags" key={item}>
                  {item}
                </span>
              ))}
            </p>
            <p>
              <strong>О себе: </strong>
              {profile.desc}
            </p>

            <div className="news-buttons">
              <Link to="/profile/edit-profile" className="btn btn-primary">
                Редактировать профиль
                <i className="far fa-address-card profile-icon"></i>
              </Link>
            </div>

            <h4 className="profile-user">Опыт:</h4>
            <hr />

            {profile.experience.map((item) => (
              <div className="card mb-2" key={item._id}>
                <div className="card-body">
                  <h5>{item.company}</h5>
                  <p className="lead">Роль: {item.title}</p>
                  <p className="card-text">Описание: {item.description}</p>

                  <button className="btn btn-danger" onClick={() => deleteExp(item._id)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="news-buttons mt-2">
          <Link to="/profile/add-experience" className="btn btn-success">
            Добавить Опыт
            <i className="fas fa-user-ninja profile-icon"></i>
          </Link>
        </div>
        <div className="someDiv" />
      </div>
    </Fragment>
  );
};

UserProfile.propTypes = {
  getProfile: PropTypes.func.isRequired,
  deleteExp: PropTypes.func.isRequired,
  profiles: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => ({
  profiles: state.profiles,
});

export default connect(MapStateToProps, { getProfile, deleteExp })(UserProfile);
