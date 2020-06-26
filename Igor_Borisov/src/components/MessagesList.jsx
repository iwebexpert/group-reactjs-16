import React, {Component} from 'react';
import {Message} from './Message';

export class MessagesList extends Component {

    componentDidUpdate() {
        const chatElement = document.querySelector('.tickets-chat-main__messages');
        chatElement.scrollTop = chatElement.scrollHeight;
    }

    render() {
        const {messages} = this.props;
        return (

            <div className="tickets-chat-main__messages">
                {
                    messages.map((message, index) =>
                        <div className={message.author === 'bot' ? 'message message-supports' : 'message message-me'}
                             key={index}>
                            <Message text={message.text} author={message.author}/>
                        </div>
                    )
                }
            </div>
        );
    }

}