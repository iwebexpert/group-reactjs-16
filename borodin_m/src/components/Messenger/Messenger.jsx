import React, {Component} from 'react';

import {MessageList} from 'components/MessageList';
import {MessageField} from 'components/MessageField';
import {Message} from 'components/Message';

import './Messenger.sass';

export class Messenger extends Component {
    state = {
        messages: [],
    };

    initMessage = 'Привет. Напиши что-нибудь в чат =)';
    timer = null;

    componentDidMount() {
        this.setState({
            messages: this.state.messages.concat({text: this.initMessage, author: 'Bot'})
        });
    }

    componentDidUpdate() {
        const {author} = this.state.messages[this.state.messages.length - 1];
        const text = author !== "" ?
            `Привет, ${author}` : "Привет. Как тебя зовут?";

        if (author !== 'Bot') {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
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
    };

    render() {
        const {messages} = this.state;

        return (
            <div className="msg-wrap">
                <MessageList messages={messages}/>
                <MessageField onSend={this.handleMessageSend}/>
            </div>
        );
    }
}