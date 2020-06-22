import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from "components/Message";

import './MessageList.scss';

export class MessageList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType),
        ),

    };

    render() {
        const {messages} = this.props;

        return (
            <ul className="messages-list">
                {messages.map((message, index) => <Message {...message} key={index} />)}
            </ul>
        );
    }
}