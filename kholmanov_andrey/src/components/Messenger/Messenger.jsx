import React, {Component} from 'react';

import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.scss';

export class Messenger extends Component {
    interval = null;

    componentDidUpdate()
    {
        clearTimeout(this.interval);

        const {messages, sendMessage} = this.props;
        console.log(messages);

        // const author = messages[messages.length - 1].author;
        // if(messages[messages.length - 1].author !== 'Bot'){
        //     this.interval = setTimeout(() => {
        //         sendMessage({text: `Привет, ${author}! Это автоответ бота!`, author: 'Bot'});
        //     }, 2000);
        // }

        // const messageList = document.querySelector('.messages-list');
        // messageList.scrollTop = messageList.scrollHeight;
    }

    render()
    {
        const {chats, messages, sendMessage, sendChat} = this.props;
        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <ChatList chats={chats} onSend={sendChat} />
                    <div className="messenger">
                        {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                        {messages && <MessageForm onSend={sendMessage} />}
                    </div>
                </div>
            </div>
        );
    }
}