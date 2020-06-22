import React from 'react';
import {Header} from '../Header';
import {ChatList} from '../ChatList';
import {MessagesList} from '../MessagesList';
import './Layout.css'


export class Layout extends React.Component {
    render() {
        return <div className="container">
            <Header/>
            <div className="horizontal">
                <ChatList/>
                <MessagesList/>
            </div>
        </div>
    }
}