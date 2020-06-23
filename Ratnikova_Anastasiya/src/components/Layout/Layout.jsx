import React, {Component} from 'react';

import './Layout.scss';
import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import {Footer} from "components/Footer";
import {ChatList} from "components/ChatList";

export class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="content">
                    <ChatList />
                    <Messenger />
                </div>
                <Footer />
            </div>
        );
    }
}