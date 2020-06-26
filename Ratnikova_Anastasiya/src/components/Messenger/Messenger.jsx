import React, {Component} from 'react';

import {MessageList} from 'components/MessageList';
import {MessageForm} from 'components/MessageForm';

import './Messenger.scss';
import {ChatList} from "components/ChatList";

export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'User'
                    },
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'User'
                    },
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'User'
                    },
                ],
            },
        },
    };

    componentDidUpdate() {
        const messagesList = document.getElementById('message_list');

        if (this.messages[this.messages.length - 1].author !== 'Bot') {
            setTimeout(this.validateMessageAuthor, 2000);
        }

        messagesList.scrollTop = messagesList.scrollHeight;
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        chat.messages = this.messages.concat([message]);

        this.setState({
            chats: {
                ...chats,
                [match.params.id]: chat
            }
        });
    }

    validateMessageAuthor = () => {
        const author = this.messages[this.messages.length - 1].author;

        if (this.messages[this.messages.length - 1].author !== 'Bot') {
            this.handleMessageSend({text: `${author}, Это автоответ бота!`, author: 'Bot'});
        }
    }

    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if (match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render() {
        return (
            <div className="messenger">
                <div className="messenger__chats-wrap">
                    <ChatList chats={this.state.chats} />
                </div>
                <div className="messenger__messages-wrap">
                    {this.messages ? <MessageList items={this.messages} /> : <SelectChat />}
                    {this.messages && <MessageForm onSend={this.handleMessageSend} />}
                </div>
            </div>
        );
    }
}

function SelectChat() {
    return (
        <div className="select-chat">
            <h1>Пожалуйста, выберите чат</h1>
        </div>
    );
}