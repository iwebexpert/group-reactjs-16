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
    botWriting: false,
  };

  componentDidUpdate() {
    const { messages, botWriting } = this.state;
    const { author } = messages[messages.length - 1];

    if (botWriting && messages[messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.setState({
          messages: messages.concat([
            {
              text: `Hey, ${author}! We've received your message!`,
              author: "Bot",
            },
          ]),
          botWriting: false,
        });
      }, 1000);
    }
  }

  setBotToWriting = () => {
    this.setState({ botWriting: true });
  };

  handleMessageSend = (message) => {
    const { text, author } = message;

    if (!author || !/\S/.test(author))
      return alert("Hey, what's your name? ;)");

    if (!text || !/\S/.test(text)) return alert("Please, enter a message!");

    this.setState({
      messages: this.state.messages.concat([message]),
    });

    this.setBotToWriting();
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
