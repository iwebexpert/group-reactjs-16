import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from 'components/Message';

import './MessagesList.scss';

export function MessagesList( props ) {
  const { messages, botName, children, removeMessage } = props;
  const messagesListBottom = useRef(null)

  const scrollToBottom = () => {
    if ( messagesListBottom ) {
      messagesListBottom.current.scrollTop = messagesListBottom.current.scrollHeight;
    }
  }

  useEffect(scrollToBottom, [messages]);

  function handleRemoveMessage( messageId ) {
    return function() {
      removeMessage( messageId );
    }
  }

  return (
    <div className="messages-container">
      <div className="messages-list" ref={ messagesListBottom }>
        { messages.map( ({ id, message, author }) => (
          <Message
            key={ id }
            isBot={ botName === author }
            author={ author }
            message={ message }
            onRemoveClick={ handleRemoveMessage( id ) }
          />
        )) }
      </div>
      <div className="status">
        { children }
      </div>
    </div>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape( messageType )
  ),
  botName: PropTypes.string.isRequired,
  removeMessage: PropTypes.func.isRequired
}