import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from "@material-ui/core";

import './ChatList.scss';

export function ChatList( props ) {
  const { list } = props;
  return (
    <List className="chat-list" component="nav" aria-label="secondary mailbox folder">
      { list.map( ({ id, name, active }) => (
        <ListItem button key={ id } selected={ active }>
          <ListItemText primary={ name } />
        </ListItem>
      ))}
    </List>
  )
}

export const chatsType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
}

ChatList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape( chatsType )
  )
}