import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MessageForm } from "components/MessageForm";
import { ChatForm } from "components/ChatForm";
import { RegisterForm } from "components/RegisterForm";

import { MessageList } from "components/MessageList";
import { Header } from "components/Header";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

import "./Messenger.scss";

export class Messenger extends Component {
  render() {
    const {
      chats,
      messages,
      sendMessage,
      handleAddChat,
      handleAddUser,
      currentUser,
    } = this.props;

    const userIsAuth = currentUser.username !== "GUEST";

    return (
      <>
        <Header currentUser={currentUser} />
        <div className="chats__wrapper">
          <List
            className="chats__list"
            component="nav"
            aria-label="main mailbox folders"
          >
            {chats.map((chat, index) => (
              <Link to={chat.link} className="chat-item__link" key={index}>
                <ListItem button>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={chat.name} />
                </ListItem>
              </Link>
            ))}
          </List>
          {messages ? (
            <div className="messenger">
              <MessageList items={messages} />
              <MessageForm currentUser={currentUser} onSend={sendMessage} />
            </div>
          ) : (
            "Please, choose a chatroom."
          )}
          <ChatForm onSend={handleAddChat} />
        </div>
        {!userIsAuth && <RegisterForm onSend={handleAddUser} />}
      </>
    );
  }
}
