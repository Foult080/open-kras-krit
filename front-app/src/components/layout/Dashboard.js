import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./spinner";
import { Redirect } from "react-router-dom";


const Dashboard = ({ auth: { isAuth, loading, user } }) => {
  

  if (!isAuth && !loading) {
    return <Redirect to="/signin" />;
  }

  return loading && user === null ? (
    <Spinner className="spinner" />
  ) : (
    <Fragment>
      <div className="header">
        <img
          className="img-profile rounded-circle "
          alt="avatar"
          src={user && user.avatar}
        />
        <h3 className="header-text">{user && user.name}</h3>
      </div>

      {/* Container with accordion */}
      <div className="container">
        <h4 className="container header-info">Информационные ресурсы:</h4>
        <hr />

        {/* News bloack 
        <h4 className="container header-info">Новости:</h4>
        <hr />
        */}
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);

/*
        <Accordion>
          <Card>
            <Card.Header className="dash-header">
              <Accordion.Toggle
                as={Button}
                variant="dark"
                eventKey="2"
                className="dash-btn"
              >
                <i className="fas fa-globe-americas"></i> ККРИТ WSR
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Ссылки на ресурс для WSR</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
*/
