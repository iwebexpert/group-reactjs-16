import React from 'react';
//import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './ChatList.css'

export class ChatList extends React.Component {
    state = {
        selectedIndex : 2
    }

    handleListItemClick = ( index) => {
        console.log('index = ', index);
    };

    render() {
        return <div className="chatlist">
            <List component="nav" aria-label="Список">
                <ListItem
                    button
                    selected={this.state.selectedIndex === 0}
                    onClick={this.handleListItemClick(0)}
                >
                    <ListItemText primary="Первый" />
                </ListItem>
                <ListItem
                    button
                    selected={this.state.selectedIndex === 1}
                    onClick={this.handleListItemClick(1)}
                >
                    <ListItemText primary="Второй" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="Еще один список">
                <ListItem
                    button
                    selected={this.state.selectedIndex === 2}
                    onClick={this.handleListItemClick(2)}
                >
                    <ListItemText primary="Третий" />
                </ListItem>
                <ListItem
                    button
                    selected={this.state.selectedIndex === 3}
                    onClick={this.handleListItemClick(3)}
                >
                    <ListItemText primary="Четвертый" />
                </ListItem>
            </List>
        </div>
    }
}