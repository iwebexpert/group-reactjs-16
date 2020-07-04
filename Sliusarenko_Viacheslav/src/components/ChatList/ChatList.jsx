import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { List, ListItem, ListItemText, TextField, Fab } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

import './ChatList.scss';

export function ChatList( props ) {
  const { chats, activeChat, onAdd, onRemove } = props;
  const [ chatName, setChatName ] = useState('');

  function handleSetChatName( event ) {
    const { target: { value }} = event;
    setChatName( value );
  }
  function handleAddNewChat() {
    if ( typeof onAdd !== 'function' ) {
      return;
    }
    onAdd( chatName );
    setChatName( '' );
  }

  function setClasses( chatId, hasNewMessage ) {
    return classNames('chat-name', {
      'highLight': !isChatActive( chatId ) && hasNewMessage
    });
  }

  function isChatActive( chatId ) {
    return activeChat === chatId;
  }

  return (
    <div className="chat-list">
      <List component="nav" aria-label="secondary mailbox folder">
        { Object.entries( chats ).map(( [ key, chat ] ) => (
          <div key={ key } className={ 'chat-item' } >
            <Link to={ `/chats/${ key }` } >
              <ListItem button selected={ isChatActive( key ) }>
                <ListItemText className={ setClasses( key, chat.hasNewMessage ) } primary={ chat.name } />
              </ListItem>
            </Link>
            <Close className="remove-chat" onClick={ onRemove( key ) }/>
          </div>
        ))}
      </List>
      <div className="new-chat">
        <TextField value={ chatName } onChange={ handleSetChatName } />
        <Fab variant="round" color="primary" size="small" onClick={ handleAddNewChat } disabled={ !chatName.trim() }>
          <Add fontSize={ "small" }/>
        </Fab>
      </div>

    </div>
  );
}

export const chatsType = {
  name: PropTypes.string.isRequired,
  messages: PropTypes.array
}

ChatList.propTypes = {
  chats: PropTypes.objectOf(
    PropTypes.shape( chatsType )
  ),
  activeChat: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}