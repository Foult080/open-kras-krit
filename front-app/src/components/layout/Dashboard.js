import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./spinner";
import { Accordion, Card, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Applicant from "../applicant/Applicant";

const Dashboard = ({ auth: { isAuth, loading, user } }) => {

  if (!isAuth && !loading) {
    return <Redirect to="/signin" />;
  }

  return loading && user === null ? (
    <Spinner />
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
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="success" eventKey="0">
                Абитуриент ККРИТ
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p className="acc-info">Информация о рейтинге:</p>
                <Applicant />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="primary" eventKey="1">
                Работа ККРИТ
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Ссылки на ресурс по работодателям</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="dark" eventKey="2">
                ККРИТ WSR
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Ссылки на ресурс для WSR</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        {/* News bloack 
        <h4 className="container header-info">Новости:</h4>
        <hr />
        */}
      </div>
    </Fragment>
  );

  /*
  loading && user === null ? <Spinner /> : 
    <Fragment>
      <div className="profile">
      <h1 className="large text-primary">Личный кабинет</h1>
      <hr />
          
      <img className="img-profile rounded-circle" alt="avatar" src={user.avatar} />
        <h4>Здравствуйте {user && user.name}!</h4>
      </div>
      <hr />
    </Fragment>
*/
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
