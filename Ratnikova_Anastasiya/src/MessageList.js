import React, {Component} from 'react';

import {Message} from "./Message";

export class MessageList extends Component {
    render() {
        const {messages} = this.props;

        return (
            <ul>
                {messages.map((message, index) => <Message message={message} index={index} />)}
            </ul>
        );
    }
}