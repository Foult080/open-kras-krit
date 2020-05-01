import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getData } from "../../actions/applicant";
import Spinner from "../layout/spinner";

const Applicant = ({ getData, applicant: { applicant, loading } }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return loading ? (
    <Spinner />
  ) : applicant === null ? (
    <Fragment>
      <p>Еще никто успешно не завершил тест</p>
    </Fragment>
  ) : (
    <Fragment>
      <div className="applicant">
        <h4>Прошло тестирование <i className="fas fa-users applicants-icon"></i>: {applicant.counts}.</h4>
        <h4>Согласилось учавствовать в программе ДПО<i className="fas fa-user-plus applicants-icon"></i>: {applicant.agreed}</h4>
      </div>
    </Fragment>
  );
};

Applicant.propTypes = {
  getData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  applicant: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  applicant: state.applicant,
});

export default connect(mapStateToProps, { getData })(Applicant);
