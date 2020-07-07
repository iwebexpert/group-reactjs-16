import React, { Component } from 'react';

import { MessengerRedux } from 'containers/MessengerContainer';
import { Header } from 'components/Header';
import { ChatListRedux } from 'containers/ChatListContainer';
import "./Layout.css";

export class Layout extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <ChatListRedux match={this.props.match} />
                    <MessengerRedux match={this.props.match} />
                </div>
            </div>
        );
    }
}
