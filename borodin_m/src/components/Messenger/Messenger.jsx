import React, {Component} from 'react';

import {ChatList} from 'components/ChatList';
import {MessageList} from 'components/MessageList';
import {MessageField} from 'components/MessageField';

import './Messenger.sass';

export class Messenger extends Component {
    render() {
        const {chats, messages, sendMessage, createChat} = this.props;

        return (
            <>
                <ChatList chats={chats} createChat={createChat} />
                <div className="msg-wrap">
                    <MessageList messages={messages} />
                    <MessageField onSend={sendMessage} />
                </div>
            </>
        );
    }
}