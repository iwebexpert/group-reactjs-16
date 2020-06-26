import React from 'react'
import {ListMessages} from "components/ListMessages";
import {MessageForm} from "components/MessageForm";
import {ChatList} from "components/ChatList";
import './Messenger.scss';

export class Messenger extends React.Component {
    state = {
        chats: {
            1: {
                name: 'Chat 1',
                messages: [
                    {
                        author: 'Author 1',
                        text: 'first message'
                    },
                    {
                        author: 'Second Author',
                        text: 'second message'
                    },
                ]
            },
            2: {
                name: 'Chat 2',
                messages: [
                    {
                        author: 'Second Author',
                        text: 'second message'
                    },
                ]
            },
            3: {
                name: 'Chat 3',
                messages: [
                    {
                        author: 'Some Author',
                        text: 'bla bla bla'
                    },
                    {
                        author: 'Author',
                        text: 'hello'
                    },
                ]
            },
        },
    };

    componentDidMount() {
        this.props.getPageName(this.state.chats[this.getChatId()].name)

        if (sessionStorage.getItem('name')) {
            document.querySelector('.messenger').style.opacity = '1';
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (+this.props.chatId !== +prevProps.chatId) {
            this.props.getPageName(this.state.chats[this.getChatId()].name)
        }

        this.chatBot(prevState)

        if (this.props.isLogin !== prevProps.isLogin) {
            if (this.props.isLogin) this.props.animationLogIn('.messenger')
            else this.props.animationLogOut('.messenger')
        }
    }

    timeout;

    addNewChat = (nameChat) => {
        const {chats} = JSON.parse(JSON.stringify(this.state));
        const keys = Object.keys(chats);
        const newId = +keys.pop() + 1

        chats[newId] = {
            name: nameChat,
            messages: [
                {
                    author: 'Bot',
                    text: `Чат ${nameChat} создан.`
                },
            ]
        }

        this.setState({chats: chats})
    }

    chatBot(prevState) {
        const callbackBot = [
            'Рад видеть тебя в чате, ',
            'Ну и погодка сегодня, ',
            'Кажется, я тебя где то уже видел, ',
            'А ты сегодня хорош, ',
            'Очень хорошо, ',
            'Не очень хорошо, ',
            'Привет, ',
            'Меня зовут GLaDOS. Давай дружить, ',
            'Ой! Кажется ты запустал SkyNet, ',
        ]

        const number = Math.floor(Math.random() * callbackBot.length);

        if (typeof this.timeout === 'number') return;

        const id = this.getChatId();
        const {chats} = this.state;
        let chat = chats[id];
        const lastMessage = chat.messages[chat.messages.length - 1];
        if (lastMessage.author.toLocaleLowerCase() !== 'bot' && prevState.chats[id].messages.length !== chat.messages.length) {
            const text = callbackBot[number] + lastMessage.author;
            this.timeout = setTimeout(() => {
                this.addMessage({author: 'Bot', text: text}, id)
                clearTimeout(this.timeout);
                this.timeout = null;
            }, 2000)
        }
    }

    addMessage = (message, id = this.getChatId()) => {
        const {chats} = JSON.parse(JSON.stringify(this.state));
        const chat = chats[id];
        chat.messages = chat.messages.concat(message);
        chats[id] = chat;
        this.setState({
            chats: chats
        })
    }

    getChatId = () => {
        let id = this.props.chatId;
        if (!id) id = Object.keys(this.state.chats)[0];
        return id;
    }

    render() {
        const chatId = this.getChatId();

        return (
            <div className="messenger">
                <ChatList handlerAddChat={this.addNewChat} chatId={chatId} chats={this.state.chats}/>
                <div className='messenger_chat'>
                    <ListMessages messages={this.state.chats[chatId].messages}/>
                    <MessageForm handlerCallback={this.addMessage}/>
                </div>
            </div>
        );
    }
}