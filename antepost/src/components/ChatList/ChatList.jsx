import React, {Component} from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
    state = {
        chatListData: [
            'Chat 1',
            'Chat 2',
            'Chat 3',
        ]
    }

    render() {
        return (
            <div className="chat-list">
                <List>
                    {this.state.chatListData.map((item, index) => {
                        return (<ListItem button key={index}>
                            <ListItemText primary={item} />
                        </ListItem>)
                    })}
                </List>
            </div>
        );
    }
}
