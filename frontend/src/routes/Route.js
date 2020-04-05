import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { store } from '~/store';

export default function RoutWrapper({
  component: Component,
  isPrivate = false,
  onlyMaster = false,
  ...rest
}) {
  const { signed } = store.getState().auth;
  const { profile } = store.getState().user;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  if (signed && !profile.adm && onlyMaster) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RoutWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  onlyMaster: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RoutWrapper.defaultProps = {
  isPrivate: false,
  onlyMaster: false,
};
