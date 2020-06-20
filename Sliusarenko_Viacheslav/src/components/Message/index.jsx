import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

export function Message( props ) {
  const { message, author, isBot } = props;

  const classes = classNames('message', {
    'message-owner': !isBot
  });

  return (
    <div className={ classes }>
      <div className="text">{ message }</div>
      <div className="author">{ author }</div>
    </div>
  );
}

export const messageType = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isBot: PropTypes.bool,
}

Message.propTypes = messageType;