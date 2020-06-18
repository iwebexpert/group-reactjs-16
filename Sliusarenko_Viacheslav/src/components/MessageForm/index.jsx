import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './MessageForm.scss';

export function MessageForm( props ) {
  const { addMessage, buttonText } = props;

  const [ message, setMessage ] = useState('');
  const [ author, setAuthor ] = useState('');

  function handleAddNewMessage() {
    if ( typeof addMessage !== "function" ) {
        console.warn("cant set message, callback is invalid");
        return;
    }
    addMessage({ author, message });
    setMessage( '');
  }

  function handleChangeValue( setState ) {
    return function ( event ) {
      const { target: { value } } = event;
      setState( value );
    }
  }

  function canAddNewMessage() {
    return isFieldNotEmpty( author ) && isFieldNotEmpty( message );
  }

  function isFieldNotEmpty( field ) {
    return field && field.trim();
  }

  return (
    <div className="form">
      <label htmlFor="authorInput">Имя</label>
      <input id="authorInput" type="text" value={ author } onChange={ handleChangeValue( setAuthor ) } />
      <label htmlFor="messageInput">Сообщение</label>
      <textarea id="messageInput" value={ message } onChange={ handleChangeValue( setMessage ) } />
      <button onClick={ handleAddNewMessage } disabled={ !canAddNewMessage() }>{ buttonText }</button>
    </div>
  );
}

MessageForm.defaultProps = {
  buttonText: 'Отправить'
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
  buttonText: PropTypes.string
}