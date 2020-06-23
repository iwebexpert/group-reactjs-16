/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './ChatList.scss';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export class ChatList extends Component {
    render()
    {
        return (
            <div className="chat-list">
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Chat Group 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Chat Group 2" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Chat 1" />
                    </ListItem>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="Chat 2" />
                    </ListItemLink>
                </List>
            </div>
        );
    }
}