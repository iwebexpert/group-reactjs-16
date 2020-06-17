import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class MessageForm extends Component {
  state = {
    text: "",
    author: "",
  };

  static propTypes = {
    onSend: PropTypes.func.isRequired,
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === "function") {
      onSend(this.state);

      this.setState({ text: "" });
    }
  };

  render() {
    const { text, author } = this.state;

    return (
      <Fragment>
        <input
          name="author"
          type="text"
          value={author}
          placeholder="Author"
          onChange={this.handleInputChange}
        />
        <textarea
          name="text"
          value={text}
          placeholder="Text"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleMessageSend}>Send message</button>
      </Fragment>
    );
  }
}
