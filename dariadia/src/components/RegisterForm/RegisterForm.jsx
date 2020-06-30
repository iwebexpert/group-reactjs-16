import React, { Component } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";

import "./RegisterForm.scss";

export class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
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

  handleAddUser = () => {
    const { onSend } = this.props;

    if (typeof onSend === "function") {
      onSend(this.state);

      this.setState({ username: "", email: "" });
    }
  };

  handleEnterCtrlDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleAddUser();
    }
  };

  render() {
    const { username, email } = this.state;

    return (
      <div className="form__register">
        <TextField
          label="username"
          name="username"
          value={username}
          onChange={this.handleInputChange}
        />
        <TextField
          label="email"
          name="email"
          value={email}
          onKeyDown={this.handleEnterCtrlDown}
          onChange={this.handleInputChange}
          autoFocus
        />
        <Fab variant="round" color="primary" onClick={this.handleAddUser}>
          <SendIcon />
        </Fab>
      </div>
    );
  }
}
