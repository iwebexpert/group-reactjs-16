import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProfilePage } from 'pages/ProfilePage';
import { loadProfile } from 'actions/profile';

class Container extends Component {
  componentDidMount() {
    const { isProfileLoaded, load } = this.props;
    if ( !isProfileLoaded ) {
      load();
    }
  }
  render() {
    const { load, ...rest } = this.props;
    return <ProfilePage { ...rest }/>
  }
}

function mapStateToProps( state ) {
  const { profile: { username, personalData, isFetching } } = state;
  return {
    isProfileLoaded: ( personalData && Object.keys( personalData ).length ),
    username, ...personalData, isFetching
  };
}

function mapDispatchToProps( dispatch ) {
  function load() {
    dispatch( loadProfile() );
  }
  return { load };
}

export default connect(mapStateToProps, mapDispatchToProps)( Container );