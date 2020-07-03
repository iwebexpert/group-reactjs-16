import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { Card, CardContent } from "@material-ui/core";

const styles = {
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Profile extends Component {
  render() {
    const {
      currentUser: { username, email },
      classes,
    } = this.props;

    return (
      <>
        <h1>User profile</h1>
        <div>sorry, nothing here yet</div>
        <br />
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <span>But we know your name</span>
            <h2>{username}</h2>
            <span>And email</span>
            <h3>{email}</h3>
            <span>And we'll find you</span>
          </CardContent>
        </Card>
      </>
    );
  }
}

export const ProfilePage = withStyles(styles)(Profile);
