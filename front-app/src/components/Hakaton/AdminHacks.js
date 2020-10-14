import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getHackatons } from "../../actions/hack";
import HackItem from "./HackItem";

const Admin = ({ getHackatons, hack: { hackatons, loading } }) => {
  useEffect(() => {
    getHackatons();
  }, [getHackatons]);
  
  return loading || hackatons == null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container">
        <h4 className="title">Список хакатонов:</h4>
        <hr />
        <div className="hackatons">
          {hackatons.map((el) => (
            <HackItem key={el._id} hack={el} />
          ))}
        </div>
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
