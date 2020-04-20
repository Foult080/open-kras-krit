import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AppLanding = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h4>Открытая площадка работодателей и студентов</h4>
            <p className="ex404">Раздел в разработке</p>
            <div className="error-actions">
              <Link to="/">
                <button className="btn btn-primary ex-btn">
                  <i className="fas fa-home"></i> На главную
                </button>
              </Link>
              <Link to="/dashboard">
                <Button className="btn btn-success">
                  <i className="fas fa-user-circle"></i>Личный кабинет
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppLanding;
