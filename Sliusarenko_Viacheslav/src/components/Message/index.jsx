import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from "@material-ui/icons";

import './Message.scss';

export function Message( props ) {
  const { message, author, isBot, onRemoveClick } = props;

  const classes = classNames('message', {
    'message-owner': !isBot
  });

  return (
    <div className={ classes }>
      <div className="text">{ message }</div>
      <div className="author">{ author }</div>
      { !isBot && <Close className='icon-remove' onClick={ onRemoveClick }/> }
    </div>
  );
}

export const messageType = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  isBot: PropTypes.bool,
  onRemoveClick: PropTypes.func
}

Message.propTypes = messageType;