import React, {Component} from 'react';

import {MessageList} from './MessageList'
import {MessageForm} from './MessageForm'

export class Messenger extends Component {
    state = {
        messages: [
            {
                text: 'Message 1',
                author: 'Nastya'
            }
        ]
    };

    interval = null;
    templateMessages = ['Hi!', 'Hello!', 'How are you?'];

    componentDidMount() {
        this.interval = setInterval(() => {
            const runIndex = Math.floor(Math.random() * this.templateMessages.length);
            this.setState({
                messages: this.state.messages.concat([{text: this.templateMessages[runIndex], author: 'Nastya'}])
            })
        }, 5000);
    }

    componentDidUpdate() {
        const author = this.state.messages[this.state.messages.length - 1].author;

        if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `${author}, Это автоответ бота!`, author: 'Bot'}])
                })
            }, 2000);
        }
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    };

    render() {
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}