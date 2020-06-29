import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProfilePage } from 'pages/ProfilePage';
import { loadProfile } from 'actions/profile';

class Container extends Component {
  componentDidMount() {
    this.props.load();
  }
  render() {
    const { load, ...rest } = this.props;
    return <ProfilePage { ...rest }/>
  }
}

function mapStateToProps( state ) {
  const { profile: { username, personalData, isLoaded } } = state;
  return { username, ...personalData, loaded: isLoaded };
}

function mapDispatchToProps( dispatch ) {
  function load() {
    dispatch( loadProfile() );
  }
  return { load };
}

export default connect(mapStateToProps, mapDispatchToProps)( Container );