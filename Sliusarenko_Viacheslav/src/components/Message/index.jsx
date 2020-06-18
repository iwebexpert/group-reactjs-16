import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

export function Message( props ) {
  const { text, author } = props;
  return (
    <div className="message__container">
      <strong className="message_author">{ author }</strong>
      <div className="message_text">{ text }</div>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};