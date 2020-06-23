import React, {Component} from 'react';

import {MessageList} from 'components/MessageList';
import {MessageForm} from 'components/MessageForm';

import './Messenger.scss';

export class Messenger extends Component {
    state = {
        messages: [
            {
                text: 'Message 1',
                author: 'Nastya'
            }
        ]
    };

    componentDidUpdate() {
        const messagesList = document.getElementById('message_list');

        if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
            setTimeout(this.validateMessageAuthor, 2000);
        }

        messagesList.scrollTop = messagesList.scrollHeight;
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    };

    validateMessageAuthor = () => {
        const author = this.state.messages[this.state.messages.length - 1].author;

        if (this.state.messages[this.state.messages.length - 1].author !== 'Bot') {
            this.setState({
                messages: this.state.messages.concat([{text: `${author}, Это автоответ бота!`, author: 'Bot'}])
            })
        }
    }

    render() {
        return (
            <div className="messenger">
                <MessageList messages={this.state.messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}