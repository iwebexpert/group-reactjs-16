import React, {Component, Fragment} from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './ChatList.scss';

export class ChatList extends Component {
    ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    render() {
        return (
            <div className="chat-list">
                <ListItem className="chat-item" button component="a" href="#simple-list-1">
                    <ListItemText primary="Chat 1" />
                </ListItem>
                <ListItem className="chat-item" button component="a" href="#simple-list-2">
                    <ListItemText primary="Chat 2" />
                </ListItem>
                <ListItem className="chat-item" button component="a" href="#simple-list-3">
                    <ListItemText primary="Chat 3" />
                </ListItem>
            </div>
        );
    }
}