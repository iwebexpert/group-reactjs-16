import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

export function NewMessage( props ) {
  const { addMessage, buttonText } = props;
  const [ newMessageText, setNewMessageText ] = useState('');

  function handleAddNewMessage() {
    addMessage( newMessageText );
  }

  function handleSetNewMessageText( event ) {
    const { target: { value } } = event;
    setNewMessageText( value );
  }

  function canAddNewMessage() {
    return newMessageText && newMessageText.trim().length;
  }

  return (
    <Fragment>
      <input type="text" onChange={ handleSetNewMessageText } />
      <button onClick={ handleAddNewMessage } disabled={ !canAddNewMessage() }>{ buttonText }</button>
    </Fragment>
  );
}

NewMessage.defaultProps = {
  buttonText: 'Add new Message'
}

NewMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  buttonText: PropTypes.string
}