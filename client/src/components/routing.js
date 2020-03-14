import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuth, loading }, ...rest }) => (
    <Route {...rest} render={ props => !isAuth && !loading ? (<Redirect to="login" />) : (<Component {...props} />)} />
);

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const MapStateToTprops = state => ({
    auth: state.auth
});

export default connect(MapStateToTprops)(PrivateRoute);