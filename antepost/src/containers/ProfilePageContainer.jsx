import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ProfilePage} from 'pages/ProfilePage';
import {profileLoad} from 'actions/profile';

class ProfilePageContainer extends Component {
    componentDidMount() {
        const {profileLoadAction} = this.props;
        profileLoadAction();
    }

    render() {
        const {profile} = this.props;

        return (
            <ProfilePage profile={profile} />
        );
    }
}

function mapStateToProps(state) {
    const profile = state.profile.entries;

    return {
        profile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoad()),
    };
}

export const ProfilePageRedux = connect(mapStateToProps, mapDispatchToProps)(ProfilePageContainer);
