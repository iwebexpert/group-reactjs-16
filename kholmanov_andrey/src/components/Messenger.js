import React, {Component} from 'react';

import {MessageForm} from './MessageForm';
import {Message} from './Message';

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
    templateMessagesBot = ['Привет!', 'Как дела?', 'Здорово!'];

    componentDidUpdate()
    {
        const lastMassege = this.state.messages[this.state.messages.length - 1];
        if(lastMassege.author !== 'Bot'){
            setTimeout(() => {
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
            }, 800);
        }
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([
                {
                    text: message.text,
                    author: message.author
                }
                ])
        });
    };

    render()
    {
        const {messages} = this.state;
        return (
            <div>
                {messages.map((message, index) => <Message message={message} key={index} />)}
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}