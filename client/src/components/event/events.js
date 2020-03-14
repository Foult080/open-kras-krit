import React, { Fragment, useEffect } from "react";
//import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { getEvents } from "../../actions/events";
import { connect } from "react-redux";
import EventItem from "./eventItem";
import Spinner from "../layouts/spinner";

const Events = ({ getEvents, events }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return events.loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="events  my-section">
        {events.events.map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    </Fragment>
  );
};

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { getEvents })(Events);