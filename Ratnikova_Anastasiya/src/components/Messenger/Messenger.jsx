import React, {Component} from 'react';

import {MessageList} from 'components/MessageList';
import {MessageForm} from 'components/MessageForm';

import './Messenger.scss';
import {ChatList} from "components/ChatList";

export class Messenger extends Component {

    componentDidUpdate() {
        const {messages, sendMessage} = this.props;
        const messagesList = document.getElementById('message_list');

        if (messages[messages.length - 1].author !== 'Bot') {
            setTimeout(this.validateMessageAuthor(messages, sendMessage), 2000);
        }

        messagesList.scrollTop = messagesList.scrollHeight;
    }

    validateMessageAuthor = (messages, sendMessage) => {
        const author = messages[messages.length - 1].author;

        if (messages[messages.length - 1].author !== 'Bot') {
            sendMessage({text: `${author}, Это автоответ бота!`, author: 'Bot'});
        }
    }

    render() {
        const {chats, messages, sendMessage} = this.props;

        return (
            <div className="messenger">
                <div className="messenger__chats-wrap">
                    <ChatList chats={chats} />
                </div>
                <div className="messenger__messages-wrap">
                    {messages ? <MessageList items={messages} /> : <SelectChat />}
                    {messages && <MessageForm onSend={sendMessage} />}
                </div>
            </div>
        );
    }
}

function SelectChat() {
    return (
        <div className="select-chat">
            <h1>Пожалуйста, выберите чат</h1>
        </div>
    );
}