import React from 'react';
import PropTypes from 'prop-types';

import MessageFormContainer from 'containers/MessageFormContainer';
import { MessagesList } from 'components/MessagesList';

import './Messenger.scss';

export function Messenger( props ) {
  const { addMessage, toggleChatStatus, removeMessage, hasNewMessage } = props;

  if ( hasNewMessage ) {
    setTimeout( toggleChatStatus, 1000 );
  }

  return (
    <div className="messenger">
      <MessagesList { ...props } removeMessage={ removeMessage }/>
      <MessageFormContainer addMessage={ addMessage } />
    </div>
  );
}

Messenger.propTypes = {
  messages: PropTypes.array.isRequired,
  addMessage: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
}