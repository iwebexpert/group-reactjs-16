import React, {Component} from 'react';

import {ChatList} from 'components/ChatList';
import {MessageList} from 'components/MessageList';
import {MessageField} from 'components/MessageField';

import './Messenger.sass';

export class Messenger extends Component {
    state = {
        chats: {
            1: {
                author: 'Петя',
                messages: []
            },
            2: {
                author: 'Вася',
                messages: []
            },
            3: {
                author: 'Коля',
                messages: []
            },
        },
    };

    timer = null;

    componentDidUpdate() {
        if (this.messages.length) {
            const {author} = this.messages[this.messages.length - 1];
            const text = author !== "" ?
                `Привет, ${author}` : "Привет. Как тебя зовут?";

            if (author !== 'Bot') {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.handleMessageSend({text, author: 'Bot'});
                }, 1500);
            }
        }
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props.data;

        const chat = chats[match.params.id];

        if (chat) {
            chat.messages = this.messages.concat(message);
            this.setState({
                chats: {
                    ...chats,
                    [match.params.id]: chat
                }
            });
        }
    };

    createChat = (chatName) => {
        if (chatName.trim()) {
            const {chats} = this.state;
            const keys = Object.keys(chats);
            const lastKey = parseInt(keys[keys.length - 1]);
            this.setState({
                chats: {
                    ...chats,
                    [lastKey + 1]: {
                        author: chatName,
                        messages: []
                    }
                }
            });
        } else {
            alert("Название чата не должно быть пустым!");
        }
    };

    get messages(){
        const {chats} = this.state;
        const {match} = this.props.data;

        let messages = [];

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render() {
        const {chats} = this.state;

        return (
            <>
                <ChatList chats={chats} createChat={this.createChat} />
                <div className="msg-wrap">
                    <MessageList messages={this.messages} />
                    <MessageField onSend={this.handleMessageSend} />
                </div>
            </>
        );
    }
}