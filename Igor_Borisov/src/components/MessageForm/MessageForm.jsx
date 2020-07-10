import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import './MessageForm.css'

export class MessageForm extends Component {
  state = {
    author: '',
    text: ''
  };

  static propTypes = {
    onSend: PropTypes.func.isRequired,
  };

  handleInput = event => {
    const inputName = event.target.name;
    this.setState({
      [inputName]: event.target.value
    })
  };
  handleSendMessage = event => {
    if (typeof event !== 'undefined') {
      event.preventDefault();
    }
    const {onSend} = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({text: ''});
    }
  };

  handleEnterCtrlDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleSendMessage();
    }
  };


  render() {
    const {text, author} = this.state;
    return (
      <form
        onSubmit={this.handleSendMessage}
        method="post">
        <TextField
          label="Автор"
          name="author"
          value={author}
          onChange={this.handleInput}
        />
        <TextField
          label="Сообщение..."
          name="text"
          value={text}
          onKeyDown={this.handleEnterCtrlDown}
          onChange={this.handleInput}
          multiline
        />
        <Fab type="submit" color="primary" aria-label="send">
          <SendIcon />
        </Fab>
      </form>
    );
  }
}