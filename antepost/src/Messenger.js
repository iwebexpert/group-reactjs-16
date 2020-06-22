import React, {Component} from 'react';

import {MessageForm} from './MessageForm';
import {Message} from './Message';

export class Messenger extends Component {
    state = {
        messages: [],
    };

    componentDidUpdate()
    {
        const lastAuthor = this.state.messages[this.state.messages.length - 1].author;
        if(lastAuthor !== 'Bot'){
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Это автоответ бота! Здравстуйте, ${lastAuthor}.`, author: 'Bot'}])
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
            <div>
                <ul>
                    {messages.map((message, index) => <Message message={message} key={index} />)}
                </ul>
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}
