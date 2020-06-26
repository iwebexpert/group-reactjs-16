import React from "react";
import './ChatList.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {TextField} from "@material-ui/core";

import {Link} from 'react-router-dom';


export class ChatList extends React.Component {
    classChat = 'chat-list_button';

    state = {
        chatNumber: 1,
        newChatName: ''
    }

    componentDidMount() {
        this.setState({chatNumber: this.props.chatId})
    }

    handlerChangeChat = (event) => {
        let elem = event.target;
        let isStop = false;
        while (!isStop) {
            if (elem.classList.contains(this.classChat)) {
                isStop = true;
            } else {
                elem = elem.parentElement;
            }
        }

        if (typeof +elem.id === 'number' && +elem.id !== +this.state.chatNumber) {
            this.setState({chatNumber: +elem.id});
        }
    };

    prepareChatList = (chats) => {
        let arrChats = [];
        for (let chat in chats) {
            arrChats.push(
                <Link key={chat} to={`/chats/${chat}`}>
                    <ListItem id={chat} button className={this.classChat} onClick={this.handlerChangeChat}>
                        <ListItemIcon>{+chat === +this.state.chatNumber ? <PlayCircleFilledIcon/> :
                            <RadioButtonUncheckedIcon color="disabled"/>}
                        </ListItemIcon>
                        <ListItemText primary={chats[chat].name}/>
                    </ListItem>
                </Link>
            )
        }
        return arrChats;
    }

    handlerClickAddChat = (event) => {
        if (!event.key || event.key.toLowerCase() === 'enter') {
            let value = '';
            if (!event.key) {
                let elem = event.target;
                let isStop = false;
                while (!isStop) {
                    if (elem.classList.contains('add-chat_icon')) {
                        isStop = true;
                    } else {
                        elem = elem.parentElement;
                    }
                }
                value = elem.nextSibling.lastChild.firstChild.value;
            } else value = event.target.value

            this.props.handlerAddChat(value)
            this.setState({newChatName: ''})
        }
    }

    handlerInputChange = (event) => {
        this.setState({
            newChatName: event.target.value
        })
    }

    render() {
        let {newChatName} = this.state;

        return (
            <List>
                {this.prepareChatList(this.props.chats)}
                <ListItem onKeyDown={this.handlerClickAddChat}>
                    <ListItemIcon className="add-chat_icon"><AddCircleOutlineIcon
                        onClick={this.handlerClickAddChat}/></ListItemIcon>
                    <TextField id="outlined-basic"
                               label="Add Chat"
                               variant="outlined"
                               value={newChatName}
                               onChange={this.handlerInputChange}
                               className={'add-chat_input'}/>
                </ListItem>
            </List>
        );
    }

}