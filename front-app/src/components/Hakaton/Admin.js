import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getHackatons } from "../../actions/hack";

const Admin = ({ getHackatons, hack: { hackatons, loading } }) => {
  useEffect(() => {
    getHackatons();
  }, [getHackatons]);
  console.log(hackatons);
  return loading || hackatons == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container col-lg-12 col-md-12 col-sm-12">
        <h4 className="news-title">Список хакатонов:</h4>
        <hr />
      </div>
    </Fragment>
  );
};

Admin.propTypes = {
  getHackatons: PropTypes.func.isRequired,
  hack: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hack: state.hack,
});

export default connect(mapStateToProps, { getHackatons })(Admin);
