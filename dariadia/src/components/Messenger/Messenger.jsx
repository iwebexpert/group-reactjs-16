import React, { Component } from "react";

import { MessageForm } from "components/MessageForm";
import { MessageList } from "components/MessageList";

import "./Messenger.css";

export class Messenger extends Component {
  state = {
    messages: [
      {
        text: "Hi! Welcome to the chatroom. Please, be nice :)",
        author: "Bot",
      },
    ],
  };

  componentDidUpdate() {
    const { messages } = this.state;
    const { author } = messages[messages.length - 1];

    console.log(messages);

    if (messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.setState({
          messages: messages.concat([
            {
              text: `Hey, ${author}! We've received your message!`,
              author: "Bot",
            },
          ]),
        });
      }, 2000);
    }
  }

  handleMessageSend = (message) => {
    const { text, author } = message;

    if (!author || !/\S/.test(author))
      return alert("Hey, what's your name? ;)");

    if (!text || !/\S/.test(text)) return alert("Please, enter a message!");

    this.setState({
      messages: this.state.messages.concat([message]),
    });
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="messenger">
        <MessageList items={messages} />
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    );
  }
}
