import React, { Component } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { MessageForm } from "components/MessageForm";
import { ChatForm } from "components/ChatForm";
import { RegisterForm } from "components/RegisterForm";
import { MessageList } from "components/MessageList";
import { Header } from "components/Header";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
  IconButton,
} from "@material-ui/core";

import InboxIcon from "@material-ui/icons/Inbox";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Messenger.scss";

export class Messenger extends Component {
  handleDeleteChat(chatId) {
    const { handleDeleteChat } = this.props;
    return handleDeleteChat(chatId);
  }

  render() {
    const {
      chats,
      messages,
      sendMessage,
      handleAddChat,
      handleAddUser,
      handleLogOutUser,
      currentUser,
      isLoading,
      isError,
    } = this.props;

    const userIsAuth = currentUser.username !== "GUEST";

    if (isLoading) {
      return <CircularProgress />;
    }

    if (isError) {
      return <div>Error. Please reload the page...</div>;
    }

    return (
      <>
        <Header currentUser={currentUser} handleLogOutUser={handleLogOutUser} />
        <div className="chats__wrapper">
          <List
            className="chats__list"
            component="nav"
            aria-label="main mailbox folders"
          >
            {chats.map((chat) => (
              <div className="chat-item" key={chat.id}>
                <Link
                  to={chat.link}
                  className={cn("chat-item__link", {
                    chat__highlighted: chat.state.highlight,
                  })}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={chat.name} />
                  </ListItem>
                </Link>
                <IconButton
                  onClick={() => this.handleDeleteChat(chat.id)}
                  aria-label="delete"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
            <ListItem>
              {!userIsAuth && <RegisterForm onSend={handleAddUser} />}
            </ListItem>
          </List>
          {messages ? (
            <div className="messenger">
              <MessageList items={messages} />
              <MessageForm currentUser={currentUser} onSend={sendMessage} />
            </div>
          ) : (
            <h2 className="messenger__prompt">Please, choose a chatroom.</h2>
          )}
          <ChatForm onSend={handleAddChat} />
        </div>
      </>
    );
  }
}
