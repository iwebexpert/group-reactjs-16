/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';

import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {Messenger} from 'components/Messenger';

import './Layout.scss';

export class Layout extends Component {
    render()
    {
        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <ChatList />
                    <Messenger />
                </div>
            </div>
        );
    }
}