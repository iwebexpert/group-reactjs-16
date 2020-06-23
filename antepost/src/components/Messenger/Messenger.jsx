import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';
export class Messenger extends Component {
    state = {
        messages: [],
        isBotReplyInProgress: false,
    };

    componentDidUpdate()
    {
        if(this.state.isBotReplyInProgress) {
            return;
        }
        const lastAuthor = this.state.messages[this.state.messages.length - 1].author;
        if(lastAuthor !== 'Bot') {
            this.state.isBotReplyInProgress = true;
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Это автоответ бота! Здравстуйте, ${lastAuthor}.`, author: 'Bot'}]),
                    isBotReplyInProgress: false,
                });
            }, 2000);
        }
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([{text: message.text, author: message.author}])
        });
    }

    render()
    {
        const {messages} = this.state;
        return (
            <div className="messenger">
                <MessageList items={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}
