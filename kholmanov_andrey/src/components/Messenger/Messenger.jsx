import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.scss';

export class Messenger extends Component {
    state = {
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor'
            },
            {
                text: 'Текстовое сообщение 2',
                author: 'Igor'
            },
            {
                text: 'Текстовое сообщение 3',
                author: 'Andrey'
            }
        ],
    };
    interval = null;
    templateMessagesBot = ['Привет!', 'Как дела?', 'Здорово!'];

    componentDidUpdate()
    {
        clearTimeout(this.interval);
        const lastMassege = this.state.messages[this.state.messages.length - 1];
        if(lastMassege.author !== 'Bot'){
            this.interval = setTimeout(() => {
                const randIndex = Math.floor(Math.random() * this.templateMessagesBot.length);
                this.setState({
                    messages: this.state.messages.concat(
                        [
                            {
                                text: this.templateMessagesBot[randIndex] + ' ' + lastMassege.author + '!',
                                author: 'Bot'
                            }
                        ]
                    )
                });
            }, 1500);
        }
        const messageList = document.querySelector('.messages-list');
        messageList.scrollTop = messageList.scrollHeight;
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([message]),
        });
    };

    render()
    {
        const {messages} = this.state;
        return (
            <div className="messanger">
                <MessageList items={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}