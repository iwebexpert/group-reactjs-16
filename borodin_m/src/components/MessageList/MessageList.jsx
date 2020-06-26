import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Message, messageType} from 'components/Message';

import './MessageList.sass';

export class MessageList extends Component {
  static propTypes = {
      messages: PropTypes.arrayOf(
          PropTypes.shape(messageType),
      ),
  };

  render() {
    const {messages} = this.props;

    return (
      <div className="msg-container">
        {messages && messages.map((message, index) =>
          <Message key={index} {...message}/>
        )}
      </div>
    );
  }
}