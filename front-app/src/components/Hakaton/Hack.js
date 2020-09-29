import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getHack } from "../../actions/hack";
import ShowHack from "./ShowHack";
import Team from "./Team";

const Hack = ({ getHack, hack: { hack, loading } }) => {
  useEffect(() => {
    getHack();
  }, [getHack]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container col-lg-12 col-md-12 col-sm-12">
        <div className="team">
          <Team />
        </div>
        <div className="hack-el">
          {hack === null ? (
            <h4 className="news-title">
              В данный момент никаких хакатонов не проводится.
            </h4>
          ) : (
            <ShowHack hack={hack} />
          )}
        </div>
      </div>
      <div className="someDiv" />
    </Fragment>
  );
};

Hack.propTypes = {
  getHack: PropTypes.func.isRequired,
  hack: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hack: state.hack,
});

export default connect(mapStateToProps, { getHack })(Hack);
