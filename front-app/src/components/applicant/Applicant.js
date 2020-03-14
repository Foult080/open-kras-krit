import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRating } from "../../actions/applicant";
import Spinner from "../layout/spinner";
import AppItem from "./AppItem";

const Applicant = ({ getRating, applicant: { applicant, loading } }) => {
  useEffect(() => {
    getRating();
  }, [getRating]);
  console.log(applicant);

  return loading ? (
    <Spinner />
  ) : applicant === null ? (
    <Fragment>Вы еще не подали документы!</Fragment>
  ) : (
    <Fragment>
      <table class="table acc-list">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Номер</th>
            <th scope="col">Специальность</th>
            <th scope="col">рейтинг</th>
          </tr>
        </thead>
        <tbody>
        {applicant.map(item => (
          <AppItem item={item} />
        ))}
        </tbody>
      </table>
      
    </Fragment>
  );
};

Applicant.propTypes = {
  getRating: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  applicant: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  applicant: state.applicant
});

export default connect(mapStateToProps, { getRating })(Applicant);
