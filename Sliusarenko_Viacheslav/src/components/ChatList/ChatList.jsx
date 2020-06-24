import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, TextField, Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import './ChatList.scss';


export function ChatList( props ) {
  const { chats, activeChat, onAdd } = props;
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

  return (
    <div className="chat-list">
      <List component="nav" aria-label="secondary mailbox folder">
        { Object.entries( chats ).map(( [ key, chat ] ) => (
          <Link key={ key } to={ `/chats/${ key }` }>
            <ListItem button selected={ Number( activeChat ) === Number( key ) }>
              <ListItemText primary={ chat.name } />
            </ListItem>
          </Link>
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
  activeChat: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired
}