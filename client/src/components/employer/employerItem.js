import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "moment/locale/ru";
import { connect } from "react-redux";

const EmployerItem = ({ employer: { _id, name, description, vacancy } }) => (
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <div class="card-header">{name}</div>
      <div class="card-body">
        <p class="card-text">{description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <Link to={`/employers/${_id}`}>
              <button type="button" class="btn btn-sm btn-primary">
                Подробнее
              </button>
            </Link>
          </div>
          <small class="text-muted">Число вакансий: {vacancy.length}</small>
        </div>
      </div>
    </div>
  </div>
);

EmployerItem.propTypes = {
  employer: PropTypes.object.isRequired
};

export default connect(null, {})(EmployerItem);
