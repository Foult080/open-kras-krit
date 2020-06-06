import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getEmployers } from "../../actions/employers";
import { Link } from "react-router-dom";

const ListEmployers = ({ getEmployers, employers: { employers, loading } }) => {
  useEffect(() => {
    getEmployers();
  }, [getEmployers]);

  return loading && employers === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <div className="col-lg-10 col-md-8 col-sm-6 mx-auto ml-auto">
          <h4 className="profile-user">Список работодателей:</h4>
          <hr />
          {employers.map((employer) => (
            <div className="card mb-2" key={employer._id}>
              <h5 className="card-header">{employer.name}</h5>
              <div className="card-body">
                <h5 className="">
                  Количество активных вакансий: {employer.vacancy.length}
                </h5>
                <p className="card-text text-justify">{employer.description}</p>
                <Link className="btn btn-primary" to={`/employers/${employer._id}`}>Подробнее</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="someDiv" />
      </div>
    </Fragment>
  );
};

ListEmployers.propTypes = {
  getEmployers: PropTypes.func.isRequired,
  employers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  employers: state.employers,
});

export default connect(mapStateToProps, { getEmployers })(ListEmployers);
