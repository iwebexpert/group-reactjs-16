import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message';

export function MessagesList( props ) {
  const { messages } = props;
  
  return messages.map( ({ id, message }) => (
    <Message text={ message } key={ id } />
  ));
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired
}