/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from "classnames";

import {List, ListItem, ListItemText, TextField, Fab, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import './ChatList.scss';

export class ChatList extends Component {
    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
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

    handleChatRemove = (event) => {
        const id = event.target.dataset.id;
        const {removeChat} = this.props;
        removeChat(id);
    };

    handleEnterCtrlDown = (event) => {
        if(event.ctrlKey && event.keyCode === 13){
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
                <div className="chat-item">
                    <Link className="chat-link" to={`${chats[chatKey].link}`}>
                        <NotificationImportantIcon className={cn("chat-notification", {
                            "chat-highlighted": chats[chatKey].highlighting,
                        })}/>
                        <ListItem className="chat-listItem" key={chatKey}>
                            <ListItemText primary={chats[chatKey].name} />
                        </ListItem>
                    </Link>
                    <RemoveCircleOutlineIcon
                        data-id={chats[chatKey].id}
                        fontSize="small"
                        onClick={this.handleChatRemove}
                    />
                </div>
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