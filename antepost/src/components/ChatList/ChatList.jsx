import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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
        const {addChat} = this.props;

        if(typeof addChat === 'function'){
            addChat(this.state.newChatName);
            this.setState({text: ''});
        }
    };

    /*handleNewChatNameSend = () => {
        const {parentCallback} = this.props;

        if(typeof parentCallback === 'function'){
            parentCallback(this.state.newChatName);
            this.setState({newChatName: ''});
        }
    };*/

    render() {
        const {chats} = this.props;
        return (
            <div className="chat-list">
                <List>
                    {chats.map((chat, index) => 
                        <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>)}
                </List>
                <TextField label="New chat" name="new-chat" value={this.state.newChatName} onChange={this.handleInputChange} />
                <Fab variant="round" color="primary" onClick={this.handleAddChat}><SendIcon /></Fab>
            </div>
        );
    }
}
