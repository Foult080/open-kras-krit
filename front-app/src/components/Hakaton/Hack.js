import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Layout/spinner";
import { getHack, getTeam } from "../../actions/hack";
import ShowHack from "./ShowHack";

const Hack = ({ getHack, getTeam, hack: { hack, loading, team } }) => {
  useEffect(() => {
    getHack();
    getTeam();
  }, [getHack, getTeam]);
  console.log(hack);
  console.log(team);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="container col-lg-12 col-md-12 col-sm-12">
        {hack === null ? (
          <h4 className="news-title">
            В данный момент никаких хакатонов не проводится.
          </h4>
        ) : (
          <ShowHack hack={hack} />
        )}
        {team === null ? (
          <div className="container profile-user">
            <h4>У вас пока еще нет команды!</h4>
            <Link to="/hack/team/create-team" className="btn btn-danger">
              Создать команду
              <i className="far fa-address-card profile-icon"></i>
            </Link>
          </div>
        ) : (
          <Fragment><h1>Hello this your team</h1></Fragment>
        )}
      </div>
      <div className="someDiv" />
    </Fragment>
  );
};

Hack.propTypes = {
  getHack: PropTypes.func.isRequired,
  getTeam: PropTypes.func.isRequired,
  hack: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  hack: state.hack,
});

export default connect(mapStateToProps, { getHack, getTeam })(Hack);
