import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Message.scss";

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export class Message extends Component {
  static propTypes = messageType;

  get direction() {
    return this.props.author === "Bot" ? "start" : "end";
  }

  render() {
    const { author, text } = this.props;
    const authorIsBot = author === "Bot";

    return (
      <div
        className={cn("message", {
          "message-bot": authorIsBot,
          "message-owner": !authorIsBot,
        })}
      >
        <div>{text}</div>
        <div className="message-author">{author}</div>
      </div>
    );
  }
}
