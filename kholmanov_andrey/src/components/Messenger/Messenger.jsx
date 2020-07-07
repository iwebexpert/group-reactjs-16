import React, {Component} from 'react';

import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.scss';

export class Messenger extends Component {
    render()
    {
        const {chats, messages, sendMessage, sendChat, user, removeChat} = this.props;
        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <ChatList chats={chats} onSend={sendChat} removeChat={removeChat} />
                    <div className="messenger">
                        {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                        {messages && <MessageForm user={user} onSend={sendMessage} />}
                    </div>
                </div>
            </div>
        );
    }
}