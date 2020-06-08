import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getMyProfile, deleteVac } from "../../actions/employers";
import { Link } from "react-router-dom";

const EmpProfile = ({
  getMyProfile,
  deleteVac,
  employers: { employer, loading },
  history,
}) => {
  useEffect(() => {
    getMyProfile();
  }, [getMyProfile, history]);

  const onClick = (e) => {
    e.preventDefault();
    deleteVac(e.target.name);
  };

  console.log(employer);

  return loading ? (
    <Spinner />
  ) : employer === null ? (
    <Fragment>
      <div className="container profile-user">
        <h4>У вас еще не заполнен профиль!</h4>
        <Link to="/employer/create-profile" className="btn btn-primary">
          Создать профиль
          <i className="far fa-address-card profile-icon"></i>
        </Link>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="container">
        <h4 className="profile-user">Анкета работодателя:</h4>
        <div className="form-div col-lg-10 col-md-8 col-sm-6 mx-auto ml-auto">
          <hr />
          <form className="form">
            <p>
              <strong>Имя пользоватля: </strong>
              {employer.name}
            </p>
            <p>
              <strong>email: </strong>
              {employer.tel}
            </p>
            <p>
              <strong>Телефон: </strong>
              {employer.email}
            </p>
            <p>
              <strong>Описание: </strong>
              {employer.description}
            </p>
            <div className="news-buttons">
              <Link to="/employer/edit-profile" className="btn btn-primary">
                Редактировать анкету
                <i className="far fa-address-card profile-icon"></i>
              </Link>
            </div>
          </form>

          <div>
            <h4 className="profile-user">Вакансии</h4>
            <hr />
            {employer.vacancy.map((item) => (
              <div className="card mb-2" key={item._id}>
                <div className="card-body">
                  <h5>Должность: {item.name}</h5>
                  <p className="card-text">
                    <strong>Навыки: </strong>
                    {item.skills.map((item) => (
                      <span className="tags" key={item}>
                        {item}
                      </span>
                    ))}
                  </p>
                  <p className="card-text"><strong>Описание: </strong> {item.description}</p>
                  <button
                    className="btn btn-danger"
                    name={item._id}
                    onClick={onClick}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))}
            <div className="news-buttons mt-2">
              <Link to="/" className="btn btn-success">
                Добавить вакансию
                <i className="fas fa-user-ninja profile-icon"></i>
              </Link>
            </div>
          </div>

          <div className="someDiv" />
        </div>
      </div>
    </Fragment>
  );
};

EmpProfile.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
  deleteVac: PropTypes.func.isRequired,
  employers: PropTypes.object.isRequired,
};

const MapStateToProps = (state) => ({
  employers: state.employers,
});

export default connect(MapStateToProps, { getMyProfile, deleteVac })(
  EmpProfile
);
