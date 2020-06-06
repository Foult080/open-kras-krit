import React, { Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const NavBar = ({ auth: { isAuth, loading }, logout }) => {
  const authLinks = (
    <Nav className="ml-auto">
      {/*
      <Nav.Link className="menu" href="/about">
        О проекте
      </Nav.Link>
 */}
      <Nav.Link href="/contact-form" className="nav-el">
        Обратная связь
      </Nav.Link>
      <Button href="/dashboard" className="menu-button" variant="success">
        <i className="fas fa-user-circle mr-1"></i>Личный кабинет
      </Button>
      <Button onClick={logout} variant="danger">
        <i className="fas fa-sign-out-alt mr-1" />
        Выйти
      </Button>
    </Nav>
  );

  const guestLinks = (
    <Nav className="ml-auto">
      <Nav.Link href="/contact-form" className="nav-el">
        Обратная связь
      </Nav.Link>
      <div>
        <Button href="/register" className="menu-button" variant="success">
          <i className="fas fa-user-circle mr-1"></i>Зарегистрироваться
        </Button>
        <Button href="/signin" variant="primary">
          <i className="fas fa-sign-in-alt mr-1"></i> Войти
        </Button>
      </div>
    </Nav>
  );
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="Navbar">
        <Navbar.Brand className="menu" href="/">
          <i className="icon fas fa-laptop-code" id="icon"></i>
          ККРИТ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!loading && <Fragment>{isAuth ? authLinks : guestLinks}</Fragment>}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
