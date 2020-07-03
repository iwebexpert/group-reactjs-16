import React, { Component } from 'react';

import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import "./ChatList.scss";

export class ChatList extends Component {
    state = {
        newChatName: '',
    }

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            newChatName: event.target.value,
        });
    };

    handleAddChat = () => {
        const { addChat } = this.props;

        if (typeof addChat === 'function') {
            addChat(this.state.newChatName);
            this.setState({ text: '' });
        }
    };

    handleDeleteChat = (chatId) => {
        const { deleteChat } = this.props;

        if (typeof deleteChat === 'function') {
            deleteChat(chatId);
        }
    }

    render() {
        const { chats, match } = this.props;
        return (
            <div className="chat-list">
                <List>
                    {chats.map((chat, index) => {
                        const isShown = chat.blinking ? 'show' : 'hide';
                        const isSelected = +match.params.id === index + 1;
                        const chatId = +chat.link.match(/\d/)[0];
                        return (
                            <MenuItem key={index} button onClick={() => this.props.handleNavigate(chat.link)} selected={isSelected}>
                                <ListItemText primary={chat.name} />
                                <div className={`blink blink-${isShown}`}></div>
                                <Fab variant="round" color="primary" size="small" onClick={(e) => { e.stopPropagation(); this.handleDeleteChat(chatId) }}><DeleteIcon /></Fab>
                            </MenuItem>
                        )
                    })}
                </List>
                <TextField label="New chat" name="new-chat" value={this.state.newChatName} onChange={this.handleInputChange} />
                <Fab variant="round" color="primary" onClick={this.handleAddChat}><SendIcon /></Fab>
            </div>
        );
    }
}
