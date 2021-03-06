import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Button,
} from "@material-ui/core";

import AccessibleForwardIcon from "@material-ui/icons/AccessibleForward";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

import "./Header.scss";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export class Header extends Component {
  render() {
    const {
      handleLogOutUser,
      currentUser: { username },
    } = this.props;

    const isAuth = username !== "GUEST";

    return (
      <div className="header">
        <CssBaseline />
        <ElevationScroll>
          <AppBar>
            <Toolbar>
              <Typography variant="h6">
                {username}, this is Sparta
                <DirectionsRunIcon className="directions-run-icon" />
                <DirectionsRunIcon className="directions-run-icon" />
                <DirectionsRunIcon className="directions-run-icon" />
                <AccessibleForwardIcon className="accessible-forward-icon" />
              </Typography>
              <Link className="profile__link" to={`/profile`}>
                Profile
              </Link>
              {isAuth && (
                <Button onClick={handleLogOutUser} variant="contained">
                  Log Out
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </div>
    );
  }
}
