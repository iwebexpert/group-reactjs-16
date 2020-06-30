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

    handleNewChatNameSend = () => {
        const {parentCallback} = this.props;

        if(typeof parentCallback === 'function'){
            parentCallback(this.state.newChatName);
            this.setState({newChatName: ''});
        }
    };

    render() {
        return (
            <div className="chat-list">
                <List>
                    {this.props.chatListData.map((item, index) => {
                        return (<ListItem button key={index}>
                            <Link to={`/chats/${item.id}`}>
                                <ListItemText primary={item.name} />
                            </Link>
                        </ListItem>)
                    })}
                </List>
                <TextField label="New chat" name="new-chat" value={this.state.newChatName} onChange={this.handleInputChange} />
                <Fab variant="round" color="primary" onClick={this.handleNewChatNameSend}><SendIcon /></Fab>
            </div>
        );
    }
}
