import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';
export class Messenger extends Component {
    render()
    {
        const {messages, sendMessage} = this.props;
        return (
            <div className="messenger">
                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}
