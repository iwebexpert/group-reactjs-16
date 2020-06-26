import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';
export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Bot',
                    },
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Bot',
                    },
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Bot',
                    },
                ],
            },
        },
        isBotReplyInProgress: false,
    };

    componentDidUpdate()
    {
        this.addNewChat();

        if(this.state.isBotReplyInProgress) {
            return;
        }
        
        if(!this.messages || this.messages.length < 1) {
            return;
        }

        const lastAuthor = this.messages[this.messages.length - 1].author;
        if(lastAuthor !== 'Bot') {
            this.state.isBotReplyInProgress = true;
            setTimeout(() => {
                this.handleMessageSend({text: `Привет, ${lastAuthor}! Это автоответ бота!`, author: 'Bot'});
                this.state.isBotReplyInProgress = false;
            }, 2000);
        }
    }

    componentDidMount() {
        this.sendChatListToParent();
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...chats,
                [match.params.id]: chat
            }
        });
    }

    get messages() {
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    sendChatListToParent() {
        const {chats} = this.state;

        let chatListData = [];
        console.log(chats); // {1: {...}, 2: {...}, 3: {...}, 4: {...}}
        for(let chatKey in chats){
            console.log(chatKey); // 1, 2, 3
            chatListData.push({id: chatKey, name: chats[chatKey].name});
        }

        console.log(chatListData); // [1, 2, 3]
        this.props.parentCallback(chatListData);
    }

    addNewChat() {
        if (this.props.newChatName === '') {
            return;
        }

        const chatNames = [];
        for (const id in this.state.chats) {
            chatNames.push(this.state.chats[id].name);
        }

        if (chatNames.includes(this.props.newChatName)) {
            return;
        }

        this.setState(prevState => {
            let chats = prevState.chats;

            const highestId = Object.keys(chats).reduce((acc, curr) => acc > curr ? acc : curr);
            chats[+highestId + 1] = {
                name: this.props.newChatName,
                messages: [
                    {
                        text: `Welcome to ${this.props.newChatName}`,
                        author: 'Bot',
                    }
                ],
            };

            return {chats};
        }, this.sendChatListToParent());
    }

    render()
    {
        return (
            <div className="messenger">
                {this.messages ? <MessageList items={this.messages} /> : 'Пожалуйста, выберите чат'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        );
    }
}
