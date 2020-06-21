import React, {Component} from 'react';

import {MessageField} from './MessageField';
import {Message} from './Message';

export class Messenger extends Component {
    state = {
        messages: [],
    };

    initMessage = 'Привет. Напиши что-нибудь в чат =)';

    componentDidMount() {
        this.setState({
            messages: this.state.messages.concat({text: this.initMessage, author: 'Bot'})
        });
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        const text = lastMessage.author !== "" ?
            `Привет, ${lastMessage.author}` : "Привет. Как тебя зовут?";
        if (lastMessage.author !== 'Bot') {
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat(
                        {text, author: 'Bot'}
                    )
                });
            }, 1500);
        }
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        });
    }

    render() {
        const {messages} = this.state;

        return (
            <div>
                <MessageField onSend={this.handleMessageSend}/>
                <div className="msg-container">
                    {messages.map((message, index) =>
                        <Message key={index} message={message}/>
                    )}
                </div>
            </div>
        );
    }
}