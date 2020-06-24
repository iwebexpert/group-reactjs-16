import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";

export class ChatList extends Component {
  chats = [
    { name: "chat 1" },
    { name: "some other chat" },
    { name: "also chat" },
  ];

  render() {
    return (
      <List component="nav" aria-label="main mailbox folders">
        {this.chats.map((chat) => {
          return (
            <ListItem button key={chat.name}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={chat.name} />
            </ListItem>
          );
        })}
      </List>
    );
  }
}
