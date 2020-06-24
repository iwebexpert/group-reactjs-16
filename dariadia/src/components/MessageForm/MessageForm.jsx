import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
    margin: "0 auto",
  },
  wrapper__column: {
    display: "flex",
    flexDirection: "column",
  },
  wrapper__button: {
    display: "flex",
    alignItems: "center",
    marginLeft: "40px",
  },
};

class MessageFormClass extends Component {
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

  handleEnterCtrlDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  };

  render() {
    const { text, author } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper__column}>
          <TextField
            label="Author"
            name="author"
            value={author}
            onChange={this.handleInputChange}
          />
          <TextField
            label="Text"
            name="text"
            value={text}
            onKeyDown={this.handleEnterCtrlDown}
            onChange={this.handleInputChange}
            multiline
            autoFocus
          />
        </div>
        <div className={classes.wrapper__button}>
          <Fab variant="round" color="primary" onClick={this.handleMessageSend}>
            <SendIcon />
          </Fab>
        </div>
      </div>
    );
  }
}

export const MessageForm = withStyles(styles)(MessageFormClass);
