import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TextField, Fab } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './MessageForm.scss';

export function MessageForm( props ) {
  const [ message, setMessage ] = useState('');
  const { username, addMessage, onChangeUsername } = props;

  function handleAddNewMessage() {
    if ( typeof addMessage !== "function" ) {
      console.warn("cant set message, callback is invalid");
      return;
    }
    addMessage({ author: username, message });
    setMessage( '' );
  }

  function handleChangeValue( setState ) {
    return function ( event ) {
      const { target: { value } } = event;
      setState( value );
    }
  }

  function canAddNewMessage() {
    return isFieldNotEmpty( message );
  }

  function isFieldNotEmpty( field ) {
    return field && field.trim();
  }

  function handleKeyUp( event ) {
    const { keyCode, shiftKey } = event;
    if ( !canAddNewMessage() ) {
      return;
    }
    if ( keyCode === 13 && !shiftKey ) {
      handleAddNewMessage();
    }
  }

  return (
    <div className="form">
      <TextField label="Автор" name="author" value={ username } onChange={ onChangeUsername } />
      <TextField
        label="Сообщение"
        name="message"
        value={ message }
        onKeyDown={ handleKeyUp }
        onChange={ handleChangeValue( setMessage ) }
        multiline
      />
      <Fab variant="round" color="primary" size="small" onClick={ handleAddNewMessage } disabled={ !canAddNewMessage() }>
        <SendIcon fontSize={ "small" } />
      </Fab>
    </div>
  );
}

MessageForm.propTypes = {
  addMessage: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired
}