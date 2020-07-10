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
import {ModalWindow} from "components/ModalWindow";
import {Link} from "react-router-dom";

export class ChatList extends React.Component {
    classChat = 'chat-list_button';

    state = {
        chatNumber: 0,
        newChatName: '',
    }

    componentDidMount() {
        this.setState({chatNumber: this.props.chatId})
    }

    handlerChangeChat = (event, id = null) => {
        let elem;
        if (!id) {
            elem = event.target;
            let isStop = false;
            while (!isStop) {
                if (elem.classList.contains(this.classChat)) {
                    isStop = true;
                } else {
                    elem = elem.parentElement;
                }
            }
        } else {
            elem = {id};
        }

        if (elem.id !== this.state.chatNumber) {
            this.setState({chatNumber: elem.id});
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
                this.props.redirect('/chats/' + newChat._id);
                this.handlerChangeChat(null, newChat._id);
            }
        }
    }

    handlerInputChange = (event) => {
        this.setState({
            newChatName: event.target.value
        })
    }

    createNewChat(name) {
        const {chats} = this.props
        const keys = Object.keys(chats);
        let _id = Math.floor(Math.random() * 100000);
        return {
            _id,
            name,
            messages: [],
            author: 'Bot',
            text: `Чат ${name} создан.`
        }
    }

    render() {
        let {newChatName} = this.state;
        const {chats, handlerRemoveChat, redirect} = this.props;
        return (
            <List>
                {chats.length && chats.map((chat, index) => {
                    return (
                        <div key={index} className="wrap-one-chat-list">
                            <ModalWindow chatId={chat._id}
                                         chats={chats}
                                         handlerRemoveChat={handlerRemoveChat}
                                         from="chat"
                                         redirect={redirect}
                                         handlerChangeChat={this.handlerChangeChat}/>
                            <Link to={chat.link} className="chat-list_text-item">
                                <ListItem id={chat._id}
                                          button
                                          className={this.classChat}
                                          onClick={this.handlerChangeChat}>
                                    <ListItemIcon>{chat._id === this.state.chatNumber ? <PlayCircleFilledIcon/> :
                                        <RadioButtonUncheckedIcon color="disabled"/>}
                                    </ListItemIcon>
                                    <ListItemText primary={chat.name}/>
                                </ListItem>
                            </Link>
                        </div>
                    );
                }) || ''}

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