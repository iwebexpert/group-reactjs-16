import React from "react";
import './ChatList.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


export class ChatList extends React.Component {
    chats = ['Chat 1', 'Chat 2', 'Chat 3', 'Chat 4'];
    classChat = 'chat-list_button';

    state = {
        chatNumber: 0
    }

    handlerChangeChat = (event) => {
        let elem = event.target
        let isStop = false;
        while (!isStop) {
            if (elem.classList.contains(this.classChat)) {
                isStop = true
            } else {
                elem = elem.parentElement
            }
        }
        if (typeof +elem.id === 'number' && +elem.id !== +this.state.chatNumber) {
            this.setState({chatNumber: +elem.id})
        }
    };

    render() {
        return (
            <List>
                {this.chats.map((text, index) => (
                    <ListItem id={index} className={this.classChat} button key={text}
                              onClick={this.handlerChangeChat}>
                        <ListItemIcon>{
                            index === this.state.chatNumber ? <PlayCircleFilledIcon/> : <RadioButtonUncheckedIcon color="disabled"/>
                        }</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        );
    }

}