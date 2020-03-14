import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Alert from '../alert';

const NavBar = () => {

  let ShowMenu = e => {
    e.preventDefault();
    //console.log(e);
  } 

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg fixed-top">
        <i className="icon fas fa-laptop-code"></i>
        <Link to="#" className="navbar-brand">
            Работа ККРИТ
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="navbarCollapse"
          onClick={e => ShowMenu(e)}
        >
          <span className="icon far fa-caret-square-down"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/events" className="nav-link">
                Мероприятия
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/employers" className="nav-link">
                Работодатели
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="#" className="nav-link">
                О проекте
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Alert />
    </Fragment>
  );
};

export default NavBar;
