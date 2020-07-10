import React from "react";
import {Profile} from "components/Profile";
import {connect} from "react-redux";
import {profileGetApi, profileSet, profileSetApi} from "actions/profile";
import {Identification} from "components/Identification";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileGetAction();
    }

    render() {
        return (
            <>
                <Identification profileSet={this.props.profileSetAction} handlerLogin={this.handlerLogin}/>
                <Profile data={this.props.data}/>
            </>
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