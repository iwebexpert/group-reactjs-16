import React from "react";
import {Profile} from "components/Profile";
import {connect} from "react-redux";
import {profileGet, profileGetApi, profileSet, profileSetApi} from "actions/profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileGetAction();
    }

    render() {
        return (
            <Profile isLogin={this.props.isLogin} data={this.props.data}/>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {isLogin} = ownProps;
    const data = {...state.profile.entries};

    return {
        isLogin,
        data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        profileGetAction: () => dispatch(profileGetApi()),
        profileSetAction: (name) => dispatch(profileSetApi(name)),
    };
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)