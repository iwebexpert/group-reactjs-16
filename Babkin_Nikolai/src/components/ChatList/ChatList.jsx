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
import {push} from 'connected-react-router';
import {ModalWindow} from "components/ModalWindow";

export class ChatList extends React.Component {
    classChat = 'chat-list_button';

    state = {
        chatNumber: 1,
        newChatName: '',
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

    handlerClickAddChat = (event) => {
        if (!event.key || event.key.toLowerCase() === 'enter') {
            let chatName = '';
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
                chatName = elem.nextSibling.lastChild.firstChild.value;
            } else chatName = event.target.value

            if (chatName) {
                const newChat = this.createNewChat(chatName);
                this.props.handlerAddChat(newChat);
                this.setState({newChatName: ''});
            }
        }
    }

    handlerInputChange = (event) => {
        this.setState({
            newChatName: event.target.value
        })
    }

    createNewChat(name) {
        const keys = Object.keys(this.props.chats);
        let chatId;
        if (keys.length) chatId = +keys.pop() + 1;
        else chatId = 1;

        return {
            chatId,
            name,
            messages: [],
            author: 'Bot',
            text: `Чат ${name} создан.`
        }
    }

    handlerNavigate = (link) => {
        console.log(link)
        push(link)
    }

    prepareChatList = () => {
        const {chats, handlerRemoveChat} = this.props;
        const arr = [];
        for (let chat in chats) {
            if (chats.hasOwnProperty(chat)) {
                arr.push(
                    <div key={chat} className="chat-list_text-item">
                        <ModalWindow chatId={chat}
                                     chats={chats}
                                     handlerRemoveChat={handlerRemoveChat}
                                     from="chat"/>
                        <ListItem id={chat}
                                  button
                                  className={this.classChat}
                                  onClick={() => this.handlerNavigate(chats[chat].link)}>
                            <ListItemIcon>{+chat === +this.state.chatNumber ? <PlayCircleFilledIcon/> :
                                <RadioButtonUncheckedIcon color="disabled"/>}
                            </ListItemIcon>
                            <ListItemText primary={chats[chat].name}/>
                        </ListItem>
                    </div>
                )
            }
        }
        return arr;
    }

    render() {
        let {newChatName} = this.state;

        return (
            <List>
                {this.prepareChatList()}

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