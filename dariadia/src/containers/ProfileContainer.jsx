import React, { Component } from "react";
import { connect } from "react-redux";

import { userLoad } from "actions/user";

import { ProfilePage } from "pages/ProfilePage";

class ProfileContainer extends Component {
  componentDidMount() {
    const { userLoadAction } = this.props;
    userLoadAction();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <ProfilePage
        currentUser={currentUser}
      />
    );
  }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps) {
  const user = state.user.currentUser;

  return {
    currentUser: user,
  };
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    userLoadAction: () => dispatch(userLoad()),
  };
}

export const ProfileRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
