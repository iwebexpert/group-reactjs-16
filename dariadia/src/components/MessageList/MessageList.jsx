import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from 'components/Message';

import './MessageList.css';

export class MessageList extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape(messageType),
        ),
       
    };

    render(){
        const {items} = this.props;

        return (
            <div className="messages-list">
                {items.map((message, index) => <Message key={index} {...message} />)}
            </div>
        );
    }

}