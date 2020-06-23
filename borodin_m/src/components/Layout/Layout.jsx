import React, {Component} from 'react';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {Messenger} from 'components/Messenger';

import './Layout.sass';

export class Layout extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <div className="main">
                  <ChatList/>
                  <Messenger/>
                </div>
            </div>
        );
    }
}