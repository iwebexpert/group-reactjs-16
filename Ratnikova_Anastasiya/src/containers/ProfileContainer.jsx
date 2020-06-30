import React, {Component} from 'react';
import {connect} from 'react-redux';

import {profileLoad} from 'actions/profile';
import {Profile} from "components/Profile";

class ProfileContainer extends Component {
    componentDidMount(){
        const {profileLoadAction} = this.props;
        profileLoadAction();
    };

    render(){
        const {name, email, phone} = this.props;

        return (
            <Profile name={name} email={email} phone={phone} />
        );
    }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps){
    const profile = state.profile.entries;
    const {name, email, phone} = {...profile};

    return {
        name: name,
        email: email,
        phone: phone,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch){
    return {
        profileLoadAction: () => dispatch(profileLoad()),
    };
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);