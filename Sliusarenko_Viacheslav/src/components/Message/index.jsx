import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

export function Message( props ) {
  const { text, ...rest } = props;
  return (
    <div className="message__container">
      <div className="message_text" { ...rest }>{ text }</div>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired
};