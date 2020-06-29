import React, {Component} from 'react';
import {connect} from "react-redux";

import {Header} from 'components/Header';
import {MessengerRedux} from 'containers/MessengerContainer';
import {ProfileRedux} from 'containers/ProfileContainer';

import 'components/Layout/Layout.sass';

export class LayoutContainer extends Component {
    render() {
        return (
            <div className="container">
                <Header location={this.props.location}/>
                <div className="main">
                    {this.props.location.pathname === '/profile/'
                        ? <ProfileRedux /> : <MessengerRedux match={this.props.match}/>}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const {match} = ownProps;

    return {
        state,
        match
    };
};

const mapDispatchToProps = dispatch => ({});

export const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);