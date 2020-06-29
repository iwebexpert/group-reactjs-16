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
        const {items} = this.props;
        console.log(items);

        return (
            <ul className="messages-list" id="message_list">
                {items.map((message, index) => <Message {...message} key={index} />)}
            </ul>
        );
    }
}