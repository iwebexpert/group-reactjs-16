import React, { Component } from "react";

import { MessageForm } from "../message-form/MessageForm";

export class Messenger extends Component {
  state = {
    messages: [
      {
        text: "Hello, world!",
        author: "Admin",
      },
    ],
  };
  interval = null;

  componentDidUpdate() {
    const { messages } = this.state;

    if (messages[messages.length - 1].author !== "Bot") {
      const messageAuthor = messages[messages.length - 1].author;

      setTimeout(() => {
        this.setState({
          messages: messages.concat([
            {
              text: `${messageAuthor}, we received your message! Thanks :)`,
              author: "Bot" 
            },
          ]),
        });
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    const { messages } = this.state;

    this.setState({
      messages: messages.concat([
        message,
      ]),
    });
  };

  render() {
    const { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <b>{message.author}: </b>
              {message.text}
            </li>
          ))}
        </ul>
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    );
  }
}
