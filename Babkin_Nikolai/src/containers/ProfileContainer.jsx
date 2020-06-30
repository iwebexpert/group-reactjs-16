import React from "react";
import {Profile} from "components/Profile";
import {connect} from "react-redux";
import {profileGet, profileSet} from "actions/profile";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.profileGetAction();

        const name = sessionStorage.getItem('name')
        if (name) {
            this.props.profileSetAction({name})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let name = sessionStorage.getItem('name')
        if (name && this.props.data.name !== name) {
            this.props.profileSetAction({name})
        }
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
        profileGetAction: () => dispatch(profileGet()),
        profileSetAction: (name) => dispatch(profileSet(name)),
    };
}

export const ProfileRedux = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)