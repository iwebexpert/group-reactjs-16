import React, {Component} from 'react';

import {ChatList} from 'components/ChatList';
import {MessageList} from 'components/MessageList';
import {MessageField} from 'components/MessageField';

import {CircularProgress} from '@material-ui/core';

import './Messenger.sass';

export class Messenger extends Component {
    render() {
        const {
            chats,
            messages,
            sendMessage,
            createChat,
            removeChat,
            messageRemove,
            isLoading
        } = this.props;

        return (
            <>
                <ChatList chats={chats} createChat={createChat} removeChat={removeChat}/>
                {isLoading ? <CircularProgress/> :
                    <div className="msg-wrap">
                        {messages ? <MessageList messages={messages} messageRemove={messageRemove}/> : "Выберите чат"}
                        {messages && <MessageField onSend={sendMessage}/>}
                    </div>
                }
            </>
        );
    }
}