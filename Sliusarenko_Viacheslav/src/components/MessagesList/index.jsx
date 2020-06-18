import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message';

export function MessagesList( props ) {
  const { messages } = props;
  return messages.map( ({ id, message, author }) => (
      <Message key={ id } author={ author } text={ message }/>
  ));
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
}