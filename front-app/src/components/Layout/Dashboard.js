import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./spinner";
import { Tabs, Tab } from "react-bootstrap";
import Applicant from "../Applicant/Applicant";
import NewsForm from "../News/NewsForm";
import UserProfile from "../Employers/UserProfile";

const Dashboard = ({ auth: { isAuth, loading, user } }) => {
  
  const student = (
    <Tabs defaultActiveKey="Employers" id="uncontrolled-tab-example">
      <Tab eventKey="Employers" title="Работа ККРИТ">
        <Fragment>
          <UserProfile />
        </Fragment>
      </Tab>
    </Tabs>
  );

  const admin = (
    <Tabs defaultActiveKey="Applicants" id="uncontrolled-tab-example">
      <Tab eventKey="Applicants" title="Абитуриенты">
        <Fragment>
          <Applicant />
        </Fragment>
      </Tab>
      <Tab eventKey="News" title="Добавить новость">
        <NewsForm />
      </Tab>
    </Tabs>
  );

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
        <h4 className="header-info">Информационные ресурсы:</h4>
        {user && user.role === "admin" ? admin : student}
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


              <Tab eventKey="WSR" title="ККРИТ WSR">
        <Fragment>
          <h1>Hello from WSR</h1>
        </Fragment>
      </Tab>
*/
