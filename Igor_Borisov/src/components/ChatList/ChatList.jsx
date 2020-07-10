import React, {Component} from 'react';
import './ChatList.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {

  render() {
    return (
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Иван Иванов" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Петр Петров" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Василий Пупкин" />
          </ListItem>
        </List>
      </div>
    )
  }
}