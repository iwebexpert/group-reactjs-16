import React, {Component} from 'react';

import {Messenger} from 'components/Messenger';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import "./Layout.css";

export class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <ChatList />
                    <Messenger />
                </div>
            </div>
        );
    }
}
