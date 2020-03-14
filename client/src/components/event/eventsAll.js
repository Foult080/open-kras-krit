import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllEvents } from "../../actions/events";
import { connect } from "react-redux";
import EventItem from "./eventItem";
import Spinner from "../layouts/spinner";

const EventsAll = ({ getAllEvents, events }) => {
  useEffect(() => {
    getAllEvents();
  }, [getAllEvents]);

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

EventsAll.propTypes = {
  getAllEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { getAllEvents })(EventsAll);