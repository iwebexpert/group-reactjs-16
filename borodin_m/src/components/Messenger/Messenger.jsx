import React, {Component} from 'react';

import {ChatList} from 'components/ChatList';
import {MessageList} from 'components/MessageList';
import {MessageField} from 'components/MessageField';

import './Messenger.sass';

export class Messenger extends Component {
    render() {
        const {chats, messages, sendMessage, createChat, removeChat, messageRemove} = this.props;

        return (
            <>
                <ChatList chats={chats} createChat={createChat} removeChat={removeChat}/>
                <div className="msg-wrap">
                    {messages ? <MessageList messages={messages} messageRemove={messageRemove} /> : "Выберите чат"}
                    {messages && <MessageField onSend={sendMessage} />}
                </div>
            </>
        );
    }
}