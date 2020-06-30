import React, {Component} from 'react';

import {ChatList} from 'components/ChatList';
import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.scss';

export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Igor'
                    },
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Igor'
                    },
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Igor'
                    },
                ],
            },
        },
    };
    interval = null;

    componentDidUpdate()
    {
        clearTimeout(this.interval);

        const {author} = this.messages[this.messages.length - 1];
        if(this.messages[this.messages.length - 1].author !== 'Bot'){
            this.interval = setTimeout(() => {
                this.handleMessageSend({text: `Привет, ${author}! Это автоответ бота!`, author: 'Bot'});
            }, 2000);
        }

        const messageList = document.querySelector('.messages-list');
        messageList.scrollTop = messageList.scrollHeight;
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props.data;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...chats,
                [match.params.id]: chat
            }
        });
    };

    handleChatSend = (chat) => {
        const {chats} = this.state;
        const keys = Object.keys(chats);
        const key = parseInt(keys[keys.length - 1]) + 1;
        console.log(chat);
        this.setState({
            chats: {
                ...chats,
                [key]: chat
            }
        });
    };

    get messages(){
        const {chats} = this.state;
        const {match} = this.props.data;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render()
    {
        const {chats} = this.state;
        return (
            <>
                <ChatList chats={chats} onSend={this.handleChatSend} />
                <div className="messanger">
                    {this.messages ? <MessageList items={this.messages} /> : 'Пожалуйста, выберите чат'}
                    {this.messages && <MessageForm onSend={this.handleMessageSend} />}
                </div>
            </>
        );
    }
}