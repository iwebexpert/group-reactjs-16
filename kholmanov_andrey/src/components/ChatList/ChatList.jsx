/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {List, ListItem, ListItemText, TextField, Fab} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './ChatList.scss';

export class ChatList extends Component {
    state = {
        name: '',
        messages: [
            {
                text: '',
                author: ''
            },
        ],
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
            messages: [
                {
                    text: 'Чат ' + event.target.value,
                },
            ],
        });
    };

    handleChatSend = () => {
        if (this.validate()) {
            const {onSend} = this.props;
            if(typeof onSend === 'function'){
                onSend(this.state);
            }
        }
    };

    handleEnterCtrlDown = (event) => {
        if(event.ctrlKey && event.keyCode === 13){
            console.log(event);
            this.handleChatSend();
        }
    };

    validate = () => {
        return true;
    };

    render()
    {
        const {chats} = this.props;

        let chatList = [];
        for(let chatKey in chats){
            chatList.push(
                <ListItem key={chatKey}>
                    <Link to={`/chat/${chatKey}`}>
                        <ListItemText primary={chats[chatKey].name} />
                    </Link>
                </ListItem>
            );
        }

        return (
            <div className="chat-list">
                <List component="nav" aria-label="main mailbox folders" className="msg-chat-link">
                    {chatList}
                </List>
                <div className="chat-form">
                    <TextField
                        className="chat-input"
                        name="name" type="text"
                        label="Name"
                        onKeyDown={this.handleEnterCtrlDown}
                        onChange={this.handleInputChange}
                        autoFocus
                    />
                    <Fab
                        className="massage-submit"
                        variant="round"
                        color="primary"
                        onClick={this.handleChatSend}>
                        <SendIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}