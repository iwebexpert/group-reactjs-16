import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './MessageForm.scss'

export class MessageForm extends Component {
    state = {
        text: '',
        author: ''
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    handleInputChange = (event) => {
        const {user} = this.props;

        this.setState({
            text: event.target.value,
            author: user.username,
        });
    };

    handleMessageSend = () => {
        if (this.validate()) {
            const {onSend} = this.props;
            if(typeof onSend === 'function'){
                onSend(this.state);
                this.setState({text: ''});
            }
        }
    };

    handleEnterCtrlDown = (event) => {
        if(event.ctrlKey && event.keyCode === 13){
            console.log(event);
            this.handleMessageSend();
        }
    };

    validate = () => {
        const messageInput = document.querySelector('.massage-input');
        const messageTextarea = document.querySelector('.massage-textarea');

        if (this.state.author && this.state.text) {
            messageInput.classList.remove('error');
            messageTextarea.classList.remove('error');
            return true;
        } else {
            if (!this.state.author) {
                messageInput.classList.add('error');
            }
            if (!this.state.text) {
                messageTextarea.classList.add('error');
            }
            return false;
        }
    };

    render(){
        const {text} = this.state;
        const {user} = this.props;

        return (
            <div className="message-form">
                <TextField
                    className="massage-input"
                    name="author" type="text"
                    value={user.username}
                    label="Author"
                    onChange={this.handleInputChange}
                />
                <TextField
                    className="massage-textarea"
                    name="text"
                    value={text}
                    label="Text"
                    onKeyDown={this.handleEnterCtrlDown}
                    onChange={this.handleInputChange}
                    multiline
                    autoFocus
                />
                <Fab
                    className="massage-submit"
                    variant="round"
                    color="primary"
                    onClick={this.handleMessageSend}>
                    <SendIcon />
                </Fab>
            </div>
        );
    }

}