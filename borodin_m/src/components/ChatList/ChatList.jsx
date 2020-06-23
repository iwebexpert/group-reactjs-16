import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';

import './ChatList.sass';

export class ChatList extends Component {
  render() {
    return (
      <div className="msg-chat-list">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Петя" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Вася" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InputIcon />
            </ListItemIcon>
            <ListItemText primary="Коля" />
          </ListItem>
        </List>
      </div>
    );
  }
}