import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import TextField from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        color: 'orange',
        background: 'white',
        textAlign: 'end',
        margin: '15px',
    },

};

class MessageFormClass extends Component {
    state = {
        text: '',
        author: ''
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    handleMessageSend = () => {
        const {onSend} = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState({
                text: ''
            });
        }
    };

    handleEnterCtrlDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            this.handleMessageSend();
        }
    }

    render() {
        const {text, author} = this.state;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <TextField label="Author" name="author" value={author} onChange={this.handleInputChange} />
                <TextField
                    label="Text"
                    name="text"
                    value={text}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleEnterCtrlDown}
                    multiline
                    autoFocus />
                    <Fab variant="round" color="primary" onClick={this.handleMessageSend}><SendIcon /></Fab>
            </div>
        )
    }
}

export const MessageForm = withStyles(styles)(MessageFormClass);