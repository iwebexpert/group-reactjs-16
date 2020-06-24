import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MessageForm } from "components/MessageForm";
import { MessageList } from "components/MessageList";
import { Header } from "components/Header";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

import "./Messenger.scss";

export class Messenger extends Component {
  state = {
    chats: {
      "1": {
        name: "😸 Chat",
        messages: [
          {
            text: "Hi! Share your happy news here",
            author: "Bot",
          },
        ],
      },
      "2": {
        name: "🙀 Chat",
        messages: [
          {
            text: "Hi! Share your shocking news here",
            author: "Bot",
          },
        ],
      },
      "3": {
        name: "😽 Chat",
        messages: [
          {
            text: "Hi 💋",
            author: "Bot",
          },
        ],
      },
    },
  };

  componentDidUpdate() {
    const { author } = this.messages[this.messages.length - 1];
    if (this.messages[this.messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.handleMessageSend({
          text: `Hey ${author}! We've received your message.`,
          author: "Bot",
        });
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { match } = this.props;
    const { author, text } = message;

    const chat = chats[match.params.id];

    if (!author || !/\S/.test(author)) {
      alert("Hey, what's your name? ;)");
      return null;
    }

    if (!text || !/\S/.test(text)) {
      alert("Please, enter a message!");
      return null;
    }

    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...chats,
        [match.params.id]: chat,
      },
    });
  };

  get messages() {
    const { chats } = this.state;
    const { match } = this.props;

    let messages = null;

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {
    const { chats } = this.state;

    let chatsComponents = [];
    for (let chatKey in chats) {
      chatsComponents.push(
        <Link
          className="chat-item__link"
          to={`/chats/${chatKey}`}
          key={chatKey}
        >
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={chats[chatKey].name} />
          </ListItem>
        </Link>
      );
    }

    return (
      <>
        <Header />
        <div className="chats__wrapper">
          <List
            className="chats__list"
            component="nav"
            aria-label="main mailbox folders"
          >
            {chatsComponents}
          </List>
          {this.messages ? (
            <div className="messenger">
              <MessageList items={this.messages} />
              <MessageForm onSend={this.handleMessageSend} />
            </div>
          ) : (
            "Please, choose a chatroom."
          )}
        </div>
      </>
    );
  }
}
