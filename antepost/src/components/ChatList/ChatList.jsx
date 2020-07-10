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
        this.setState({
            newChatName: event.target.value,
        });
    };

    handleAddChat = () => {
        const { addChat, chats } = this.props;

        const chatNames = [];
        for (const id in chats) {
            chatNames.push(chats[id].name);
        }
    
        if (chatNames.includes(this.state.newChatName)) {
            alert('Name already taken. Choose another');
            return null;
        }

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
                        const chatId = chat.link.match(/chats\/(.*)/)[1];
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
