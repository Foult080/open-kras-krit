import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./spinner";
import { Redirect } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

const Dashboard = ({ auth: { isAuth, loading, user } }) => {
  if (!isAuth && !loading) {
    return <Redirect to="/signin" />;
  }

  console.log(user);

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

        <Tabs defaultActiveKey="News" id="uncontrolled-tab-example">
          <Tab eventKey="News" title="Новости">
            <Fragment>
              <h1>Hello from Contract</h1>
            </Fragment>
          </Tab>
          <Tab eventKey="Employers" title="Работа ККРИТ">
            <Fragment>
              <h1>Hello from Profile</h1>
            </Fragment>
          </Tab>
          <Tab eventKey="WSR" title="ККРИТ WSR">
            <Fragment>
              <h1>Hello from Contract</h1>
            </Fragment>
          </Tab>
          {user && user.role === "admin" ? (
            <Tab
              eventKey="Applicant"
              title="Абитуриент"
              display={user && user.role === "admin" ? "hidden" : "none"}
            >
              <Fragment>
                <h1>hello from 1</h1>
              </Fragment>
            </Tab>
          ) : (
            ""
          )}
        </Tabs>

        {/* News block 
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
