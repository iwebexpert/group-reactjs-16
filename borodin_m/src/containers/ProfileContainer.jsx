import React, {Component} from 'react';
import {connect} from "react-redux";

import {Profile} from 'components/Profile';
import {profileLoad} from "actions/profile";

class ProfileContainer extends Component
{
    componentDidMount() {
        const {profileLoadAction} = this.props;
        profileLoadAction();
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

function mapStateToProps(state) {
    const {profile} = state;

    return {
        profile
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileLoadAction: () => dispatch(profileLoad()),
    }
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);