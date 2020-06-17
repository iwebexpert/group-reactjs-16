import React, { Component } from "react";

import { MessageForm } from "../message-form/MessageForm";

export class Messenger extends Component {
  state = {
    messages: [
      {
        text: "Текстовое сообщение 1",
        author: "Igor",
      },
    ],
  };
  interval = null;
  templateMessages = ["Hi!", "Hello!", "How are you?"];

  componentDidMount() {
    this.interval = setInterval(() => {
      const randIndex = Math.floor(
        Math.random() * this.templateMessages.length
      );
      this.setState({
        messages: this.state.messages.concat([
          { text: this.templateMessages[randIndex], author: "Igor" },
        ]),
      });
    }, 5000);
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].author !== "Bot") {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([
            { text: "Это автоответ бота!", author: "Bot" },
          ]),
        });
      }, 2000);
    }
  }

  handleMessageSend = (message) => {
    console.log(message);
    //TODO: ДЗ
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
