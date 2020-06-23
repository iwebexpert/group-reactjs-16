import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './MessageField.sass';

export class MessageField extends Component {
  state = {
    text: '',
    author: ''
  };

  static propTypes = {
    onSend: PropTypes.func.isRequired,
  };

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    this.setState({
      [fieldName]: event.target.value
    });
  };

  handleMessageSend = () => {
    const {onSend} = this.props;

    if (typeof onSend === 'function') {
      if (this.state.text.trim() !== "") {
        onSend(this.state);
      } else {
        alert("Напиши что-нибудь =)");
      }

      this.setState({text: ''});
    }
  };

  handleOnKeyUp = (event) => {
    if (event.keyCode === 13 && event.altKey) {
      this.setState({
        text: this.state.text + "\n"
      });
    } else if (event.keyCode === 13) {
      this.handleMessageSend();
    }
  };

  render() {
    const {text, author} = this.state;

    return (
      <div className="msg-field">
        <TextField
          label="Author"
          name="author"
          value={author}
          onChange={this.handleInputChange}
        />
        <div className="msg-text-wrap">
          <TextField
            label="Text"
            name="text"
            value={text}
            onKeyUp={this.handleOnKeyUp}
            onChange={this.handleInputChange}
            multiline
            autoFocus
          />
          <Fab
            variant="round"
            color="primary"
            size="small"
            onClick={this.handleMessageSend}
          >
            <SendIcon fontSize="small" />
          </Fab>
        </div>
      </div>
    );
  }
}