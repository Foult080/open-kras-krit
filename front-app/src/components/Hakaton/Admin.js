import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getHack } from "../../actions/hack";

const Admin = ({ getHack, hack: { hackatons, loading } }) => {
  useEffect(() => {
    getHack();
  }, [getHack]);
  console.log(hackatons);
  return loading || hackatons == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container col-lg-12 col-md-8 col-sm-8">
        <h4 className="news-title">Список хакатонов:</h4>
        <hr />
      </div>
    </Fragment>
  );
};

Admin.propTypes = {
  getHack: PropTypes.func.isRequired,
  hack: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hack: state.hack,
});

export default connect(mapStateToProps, { getHack })(Admin);
