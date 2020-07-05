import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputIcon from '@material-ui/icons/Input';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import './ChatList.sass';

export class ChatList extends Component {
    state = {
        chatName: ""
    };

    static propTypes = {
        chats: PropTypes.array.isRequired,
        createChat: PropTypes.func.isRequired
    };

    createChat = () => {
        const {createChat} = this.props;

        if (typeof createChat === 'function') {
            createChat(this.state.chatName);
            this.state.chatName = "";
        }
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    removeChat = (event) => {
        let elem = null;
        if (event.target.tagName === 'svg') {
            elem = event.target;
        } else if (event.target.tagName === 'path') {
            elem = event.target.parentElement;
        }

        if (elem) {
            const {removeChat} = this.props;
            const id = elem.dataset.id;
            removeChat(id);
        }
    };

    render() {
        const {chats} = this.props;

        return (
            <div className="msg-chat-list">
                <List component="nav" aria-label="main mailbox folders" className="msg-chat-link">
                    {chats.map((chat, index) =>
                        <div className={chat.updated ? "msg-chat-item-wrap msg-chat-item-fired" : "msg-chat-item-wrap"} key={index}>
                            <Link to={chat.link} className="msg-chat-item">
                                <ListItem>
                                    <ListItemIcon>
                                        <InputIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={chat.name}/>
                                </ListItem>
                            </Link>
                            <CloseIcon onClick={this.removeChat} data-id={chat.id} fontSize="small"/>
                        </div>
                    )}
                </List>
                <div className="msg-chat-add">
                    <div className="msg-chat-add-label">Добавить чат</div>
                    <div className="msg-chat-add-wrap">
                        <TextField
                            name="chatName"
                            value={this.state.chatName}
                            onChange={this.handleInputChange}
                        />
                        <Fab
                            variant="round"
                            color="primary"
                            size="small"
                            onClick={this.createChat}
                        >
                            <AddIcon fontSize="small" />
                        </Fab>
                    </div>
                </div>
            </div>
        );
    }
}