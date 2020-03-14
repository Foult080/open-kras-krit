import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import 'moment/locale/ru';
import { connect } from "react-redux";

const EventItem = ({ event: { _id, title, description, date } }) => (
  <div className="card col-md-8 col-lg-8 mx-auto">
    <div className="card-header"><Moment format="LL">{date}</Moment></div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {description}
      </p>
      <Link to={`/events/${_id}`} className="btn btn-primary">
        Подробнее
      </Link>
    </div>
  </div>
);

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};

export default connect(null, {})(EventItem);
