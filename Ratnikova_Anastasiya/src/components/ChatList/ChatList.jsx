import React, {Component, Fragment} from 'react';

import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';


import './ChatList.scss';

export class ChatList extends Component {
    render() {
        const {chats, messages} = this.props;

        let chatsComponents = [];
        for(let chatKey in chats){
            chatsComponents.push(
                <ListItem key={chatKey} className="chat-list__item">
                    <Link to={`/chats/${chatKey}`}  className="chat-list__link">
                        <ListItemText primary={chats[chatKey].name} />
                    </Link>
                </ListItem>
            );
        }

        return (
            <List className="chat-list">
                {chats.map((chat, index) =>
                    <ListItem key={index} className="chat-list__item">
                        <Link to={chat.link}  className="chat-list__link">
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>)}
            </List>
        );
    }
}