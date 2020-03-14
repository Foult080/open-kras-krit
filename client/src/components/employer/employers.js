import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getEmployers } from "../../actions/employers";
import { connect } from "react-redux";
import EmployerItem from "./employerItem";
import Spinner from "../layouts/spinner";

const Employers = ({ getEmployers, employers }) => {
  useEffect(() => {
    getEmployers();
  }, [getEmployers]);

  console.log(employers);

  return employers.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            {employers.employers.map(employer => (
              <EmployerItem key={employer._id} employer={employer} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Employers.propTypes = {
  getEmployers: PropTypes.func.isRequired,
  employers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  employers: state.employers
});

export default connect(mapStateToProps, { getEmployers })(Employers);
